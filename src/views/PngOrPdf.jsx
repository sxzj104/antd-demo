import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Table, Button } from 'antd';
import { useRef } from 'react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
const PngOrPdf = () => {
    const printRef = useRef(null);
    const printReport = () => {
        html2canvas(printRef.current, {
            backgroundColor: 'white',
            useCORS: true, //支持图片跨域
            scale: 2, //设置放大的倍数
            height: printRef.current.scrollHeight,
            windowHeight: printRef.current.scrollHeight,
        }).then(canvas => {
            // 生成图片导出
            // const a = document.createElement('a');
            // a.href = canvas.toDataURL('image/png');
            // a.download = 'demo.png';
            // a.click();

            // 生成pdf导出
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210; // PDF 页面宽度
            const pageHeight = pdf.internal.pageSize.height; // PDF 页面高度
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // 根据宽度计算高度
            let heightLeft = imgHeight;

            let position = 0;

            // 如果图像高度大于页面高度，则需要分页
            if (heightLeft >= pageHeight) {
                // 添加第一页
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                position -= pageHeight;

                // 添加剩余页面
                while (heightLeft >= 0) {
                    pdf.addPage();
                    pdf.addImage(
                        imgData,
                        'PNG',
                        0,
                        position,
                        imgWidth,
                        imgHeight
                    );
                    heightLeft -= pageHeight;
                    position -= pageHeight;
                }
            } else {
                // 如果图像高度小于页面高度，直接添加
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            }

            pdf.save('demo.pdf');
        });
    };
    return (
        <>
            {/* 内部滚动条想要截全的需要外层包裹 设置样式 */}
            <div style={{ height: '240px', overflowY: 'scroll' }}>
                <div ref={printRef}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            pageSize: 50,
                        }}
                    />
                </div>
            </div>
            <Button onClick={printReport}>下载图片</Button>
        </>
    );
};
export default PngOrPdf;
