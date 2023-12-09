
  // Dữ liệu mẫu cho đồ thị (tạm thời) 
  const yArray = [1,2,4,5,6,4,8,9,10,9,10,9,8,10]; //điểm đường đồ thị 

  // Tạo đồ thị sử dụng Plotly với dữ liệu trục hoành mặc định (24 giờ qua)
  const data = [{
    x: Array.from({ length: 24 }, (_, i) => i + 1), // Mặc định hiển thị cho 24 giờ qua
    y: yArray,
    mode: "lines"
  }];

  const layout = {
    xaxis: {
      range: [1, 24], // Giới hạn giá trị trục hoành trong khoảng từ 1 đến 24
      title: "Thời gian",
      tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], // Các giá trị trục hoành bạn muốn hiển thị
      ticktext: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"] // Văn bản tương ứng với các giá trị trục hoành
    },
    yaxis: { range: [5, 16], title: "Giá trị nhiệt độ °C" },
    title: "Đồ thị nhiệt độ"
  };

    Plotly.newPlot("myPlot", data, layout);
    // Xử lý sự kiện khi dropdown list thay đổi giá trị
    document.getElementById('timeRange').addEventListener('change', function () {
    const selectedValue = this.value;
    let xData = [];
    let tickTextData = [];

    // Tùy thuộc vào giá trị được chọn, thay đổi dữ liệu trục hoành và văn bản tương ứng
    if (selectedValue === '24h') {
    xData = Array.from({ length: 24 }, (_, i) => i + 1); // Tạo mảng cho 24 giờ qua
    tickTextData = xData.map(value => value.toString());
    } else if (selectedValue === '7d') {
    // Tạo mảng cho 7 ngày qua (cập nhật dữ liệu thực tế tại đây)
    xData = Array.from({ length: 7 }, (_, i) => new Date().getDate() - 6 + i); 
    tickTextData = xData.map(value => new Date(new Date().getFullYear(), new Date().getMonth(), value).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }));
    } else if (selectedValue === '30d') {
    // Tạo mảng cho 30 ngày qua từ ngày hiện tại lùi về
    xData = Array.from({ length: 30 }, (_, i) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 29 + i);
        return currentDate.getDate();
    }); 
    tickTextData = xData.map(value => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 29 + value - 1);
        return currentDate.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
    });
    }
    // Cập nhật dữ liệu trục hoành và văn bản tương ứng
    Plotly.relayout('myPlot', {
    'xaxis.tickvals': xData,
    'xaxis.ticktext': tickTextData
    });
});