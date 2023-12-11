import React, {useState, useEffect } from 'react';
import * as styles from './styleDashboard';
import Plotly from 'plotly.js-dist';
import { fonts } from '../../global.js'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { myGarden } from '../../api/garden.js'

const Dashboard = () => {
  const [tempYArray, setTempYArray] = useState([1, 2, 4, 5, 6, 4, 8, 9, 10, 9, 10, 9, 8, 10, 12, 8, 6, 5, 8, 7, 7, 7, 7, 9, 10, 9, 10, 9, 8, 10, 12]);
  const [humidYArray, setHumidYArray] = useState([2, 3, 5, 6, 7, 5, 9, 10, 11, 10, 11, 10, 9, 11, 13, 9, 7, 6, 9, 8, 8, 8, 8, 10, 11, 10, 11, 10, 9, 11, 13]);
  const [lightYArray, setLightYArray] = useState([2, 3, 5, 6, 7, 5, 9, 10, 11, 10, 11, 10, 9, 11, 13, 9, 7, 6, 9, 8, 8, 8, 8, 10, 11, 10, 11, 10, 9, 11, 13]);
  const [soilYArray, setSoilYArray] = useState([2, 3, 5, 6, 7, 5, 9, 10, 11, 10, 11, 10, 9, 11, 13, 9, 7, 6, 9, 8, 8, 8, 8, 10, 11, 10, 11, 10, 9, 11, 13]);
  const [selectedTempRange, setSelectedTempRange] = useState('24h');
  const [selectedHumidRange, setSelectedHumidRange] = useState('24h');
  const [selectedLightRange, setSelectedLightRange] = useState('24h');
  const [selectedSoilRange, setSelectedSoilRange] = useState('24h');
  const [selectedGarden, setSelectedGarden] = useState('Vườn cà chua');
  const [currentHour, setCurrentHour] = useState('');

  const gardenOptions = [
    'Vườn xà lách',
    'Vườn cà chua',
    'Vườn rau mầm',
    // Thêm các tên vườn khác vào đây
  ];

  const handleGardenChange = (event) => {
    setSelectedGarden(event.target.value);
    // Thực hiện các thay đổi khi vườn được chọn
  };

  useEffect(() => {
    const tempXData = generateXData(selectedTempRange);
    const humidXData = generateXData(selectedHumidRange);
    const lightXData = generateXData(selectedLightRange);
    const soilXData = generateXData(selectedSoilRange);

    const tempData = [{
      x: tempXData,
      y: tempYArray,
      mode: "lines"
    }];

    const humidData = [{
      x: humidXData,
      y: humidYArray,
      mode: "lines"
    }];
    const lightData = [{
      x: lightXData,
      y: lightYArray,
      mode: "lines"
    }];
    const soilData = [{
      x: soilXData,
      y: soilYArray,
      mode: "lines"
    }];

    const tempLayout = {
      xaxis: {
        range: [1, tempXData.length],
        title: "Thời gian",
        tickvals: tempXData,
        ticktext: tempXData.map(value => value.toString())
      },
      yaxis: { range: [5, 16], title: "Giá trị nhiệt độ °C" },
      title: "Biểu đồ nhiệt độ"
    };

    const humidLayout = {
      xaxis: {
        range: [1, humidXData.length],
        title: "Thời gian",
        tickvals: humidXData,
        ticktext: humidXData.map(value => value.toString())
      },
      yaxis: { range: [0, 15], title: "Độ ẩm không khí (%)" },
      title: "Biểu đồ độ ẩm không khí"
    };
    const lightLayout = {
      xaxis: {
        range: [1, lightXData.length],
        title: "Thời gian",
        tickvals: lightXData,
        ticktext: lightXData.map(value => value.toString())
      },
      yaxis: { range: [0, 15], title: "Ánh sáng (%)" },
      title: "Biểu đồ cường độ ánh sáng"
    };
    const soilLayout = {
      xaxis: {
        range: [1, soilXData.length],
        title: "Thời gian",
        tickvals: soilXData,
        ticktext: soilXData.map(value => value.toString())
      },
      yaxis: { range: [0, 15], title: "Độ ẩm đất (%)" },
      title: "Biểu đồ độ ẩm đất"
    };
    Plotly.newPlot("tempChart", tempData, tempLayout);
    Plotly.newPlot("humidChart", humidData, humidLayout);
    Plotly.newPlot("lightChart", lightData, lightLayout);
    Plotly.newPlot("soilChart", soilData, soilLayout);
  }, [tempYArray, humidYArray, lightYArray, soilYArray, selectedTempRange, selectedHumidRange, selectedLightRange, selectedSoilRange]);

  const handleTempDropdownChange = (event) => {
    setSelectedTempRange(event.target.value);
  };

  const handleHumidDropdownChange = (event) => {
    setSelectedHumidRange(event.target.value);
  };
  const handleLightDropdownChange = (event) => {
    setSelectedLightRange(event.target.value);
  };
  const handleSoilDropdownChange = (event) => {
    setSelectedSoilRange(event.target.value);
  };

  const generateXData = (selected) => {
    switch (selected) {
      case '24h':
        return Array.from({ length: 24 }, (_, i) => i + 1);
      case '7d':
        return generateDateRange(7);
      case '30d':
        return generateDateRange(30);
      default:
        return Array.from({ length: 24 }, (_, i) => i + 1);
    }
  };

  const generateDateRange = (daysAgo) => {
    const dates = [];
    const currentDate = new Date();

    for (let i = daysAgo - 1; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`; // Format: dd/mm
      dates.push(formattedDate);
    }

    return dates;
  };

// Thêm vườn
const [modalVisible, setModalVisible] = useState(false);
const [tenVuon, setTenVuon] = useState('');
const [viTri, setViTri] = useState('');
const [cayTrong, setCayTrong] = useState('');

const showModal = () => {
  setModalVisible(true);
  setTenVuon('');
  setViTri('');
  setCayTrong('');
};

const hideModal = () => {
  setModalVisible(false);
};

const saveData = async () => {
  try {
    const gardenName = tenVuon; 
    const location = viTri; 
    const cropType = cayTrong;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDI1MzAxOTksInVzZXJuYW1lIjoiTiJ9.-UCJafhaOKKMlE4BbP9Ntq3NIgwRmCByFnmtkjRCxYk'; 

    // Gọi hàm myGarden
    const response = await myGarden(gardenName, location, cropType, token);

    console.log('Result:', response);
    hideModal(); 
  } catch(error) {
    console.error('Error:', error);
    hideModal(); 
  };
};



  // nhấn nút bật tắt thiết bị
  const [shiftedLight, setShiftedLight] = useState(false);
  const [shiftedWater, setShiftedWater] = useState(false);


  const handleButtonLightClick = () => {
    setShiftedLight(!shiftedLight); // Đảo ngược giá trị mỗi khi được nhấp
  };
  const handleButtonWaterClick = () => {
    setShiftedWater(!shiftedWater); // Đảo ngược giá trị mỗi khi được nhấp
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();
      const formattedHour = format(currentDateTime, "hh:mm a"); // Format thời gian theo 12 giờ và AM/PM
      setCurrentHour(formattedHour);
    }, 1000); // Cập nhật thời gian mỗi giây

    return () => clearInterval(intervalId);
  }, []);
// Đổi trang

  return (
    <styles.DashboardRoot>
    {/* Header */}
      <styles.Webheadercontainer>
          <styles.Dashboard2 style={{cursor: 'default'}}>Dashboard</styles.Dashboard2>
          <styles.AddgardenContainer>
            <styles.Addgardenitems>
              <styles.Icongarden alt="" src="/icongarden.svg" />
              <styles.TextAddGarden style={{cursor: 'default'}}>Thêm vườn</styles.TextAddGarden>
              <styles.Iconaddgarden alt="" src="/add.png" onClick={showModal} />
                {/* Hiển thị modal khi modalVisible là true */}
                {modalVisible && (
                  <div className="modal" style={{ position: 'absolute', width: 289,padding: 20,top: 48,marginLeft: -26,fontSize: '16px', border: '1px solid #fff',fontWeight: 'bold',zIndex: 1,backgroundColor: '#fff'}}>
                    {/* Nội dung của modal */}
                    <div className="modal-content">
                      <input
                        type="text"
                        placeholder="Tên vườn"
                        value={tenVuon}
                        onChange={(e) => setTenVuon(e.target.value)}
                        style={{left: '20px', marginBottom: '10px', fontSize: 18, width: 275, padding: 5}}
                      /><br />

                      <input
                        type="text"  placeholder="Vị trí"   
                        value={viTri}  onChange={(e) => setViTri(e.target.value)}
                        style={{left: '20px', marginBottom: '10px', fontSize: 18, width: 275, padding: 5}}/><br />
                      <input
                        type="text" placeholder="Cây trồng"
                        value={cayTrong} onChange={(e) => setCayTrong(e.target.value)}
                        style={{marginBottom: '10px', fontSize: 18, width: 275, padding: 5}}/><br />
                     
                      <button style={{fontSize: 18,marginLeft: 70, backgroundColor: '#B4E0A0', marginRight: 15, borderWidth: 1, fontFamily: `var(--font-${fonts.roboto})`, borderRadius: 5, padding: 5, width: 70 }} 
                              onClick={saveData}>Lưu</button>
                      <button style={{fontSize: 18, backgroundColor: '#B4E0A0', borderWidth: 1, fontFamily: `var(--font-${fonts.roboto})`, borderRadius: 5, padding: 5, width: 70 }} 
                              onClick={hideModal}>Hủy</button>

                    </div>
                  </div>
                )}              
            </styles.Addgardenitems>
          </styles.AddgardenContainer>
        </styles.Webheadercontainer>

    {/* Subheader */}
      <styles.Maininforcontainer>
        {/* Chọn vườn */}
        <styles.Gardennamecontainer>
                <select
                  value={selectedGarden}
                  onChange={handleGardenChange}
                  style={{
                    padding: '11px',
                    color: '#056C09',
                    marginLeft: '25px',
                    fontSize: '23px',
                    border: '1px solid #fff',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  {gardenOptions.map((garden, index) => (
                    <option key={index} value={garden}>
                      {garden}
                    </option>
                  ))} 
                </select>
        </styles.Gardennamecontainer>

        <styles.Timecontainer>
           <styles.Hour>{currentHour}</styles.Hour>
        </styles.Timecontainer>

      {/* Info người dùng */}
        <styles.Userinfocontainer>

          <styles.AvatarimageIcon alt="" src="/avatarimage@2x.png" />

          <styles.ContainerInfoUser>          
            <styles.Nametext>
              <styles.Hello style={{cursor: 'default'}}>Hello,</styles.Hello>
              <styles.NguynTrBo style={{cursor: 'default'}}> Nguyễn Trà Bảo Ngân</styles.NguynTrBo>
            </styles.Nametext>

            <styles.Locatetext style={{cursor: 'default'}}>Dĩ An, Bình Dương</styles.Locatetext>
          </styles.ContainerInfoUser>
        </styles.Userinfocontainer>

      </styles.Maininforcontainer>

      {/* Các chỉ số khu vườn */}
      <styles.Mainparametercontainer>
        {/* Đất */}
        <styles.Soilboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemsoil>
            <styles.Soiltext>65%</styles.Soiltext>
            <styles.Iconsoil alt="" src="/iconsoil@2x.png" />
          </styles.Itemsoil>
          <styles.Soiltitle>Độ ẩm đất</styles.Soiltitle>
        </styles.Soilboxcontainer>
        {/* Không khí */}
        <styles.Airboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemair>
            <styles.Airtext>65%</styles.Airtext>
            <styles.Iconair alt="" src="/iconair@2x.png" />
          </styles.Itemair>
          <styles.Airtitle>Độ ẩm không khí</styles.Airtitle>
        </styles.Airboxcontainer>
        {/* Ánh sáng */}
        <styles.Lightboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemlight>
            <styles.Lighttext>65%</styles.Lighttext>
            <styles.Iconlight alt="" src="/iconlight@2x.png" />
            <styles.Lighttitle>Ánh sáng</styles.Lighttitle>
          </styles.Itemlight>
        </styles.Lightboxcontainer>
        {/* Nhiệt độ */}
        <styles.Tempboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemtemp>
            <styles.Temptext>30°C</styles.Temptext>
            <styles.Icontemp alt="" src="/icontemp@2x.png" />
          </styles.Itemtemp>
          <styles.Temptitle>Nhiệt độ</styles.Temptitle>
        </styles.Tempboxcontainer>
      </styles.Mainparametercontainer>
   
    {/* Taskbar */}
      <styles.Taskbarcontainer>
        <styles.Taskbar />
        <styles.ItemAboutUs>
          <styles.IconAboutUs alt="" src="/icon-about-us.svg" />
          <styles.AboutUs style={{ cursor: 'default'}} >About us</styles.AboutUs>
        </styles.ItemAboutUs>
        <styles.ItemAllGardens>
          <Link to="/all-gardens">
            <styles.TtCKhu style={{ cursor: 'default', color: '#FFF'}}>Tất cả khu vườn</styles.TtCKhu>
          </Link>
          <styles.IconAllGardern alt="" src="/icon-all-gardern.svg" />
        </styles.ItemAllGardens>
        <styles.ItemDashboard>
          <styles.Dashboard1 style={{ cursor: 'default', color: '#24FF00'}}>Dashboard</styles.Dashboard1>
          <styles.DashboardIcon alt="" src="/dashboard.svg" />
        </styles.ItemDashboard>
        <styles.Plantaholic>Plantaholic</styles.Plantaholic>
        <styles.LogoIcon alt="" src="/logo@2x.png" />

        <styles.Navlist>
          <styles.Icontext>
            <styles.MoreIcon alt="" src="/info.svg" />
            <styles.OfflineOrders1>Help Center</styles.OfflineOrders1>
          </styles.Icontext>
          <styles.ChevronDownIcon2 alt="" src="/chevrondown1.svg" />
        </styles.Navlist>

        <styles.Navlist1>
          <styles.Icontext>
            <styles.MoreIcon alt="" src="/logout.svg" />
            <styles.OfflineOrders1>Log out</styles.OfflineOrders1>
          </styles.Icontext>
          <styles.Indicator>
            <styles.Wrapper>
              <styles.M>2</styles.M>
            </styles.Wrapper>
          </styles.Indicator>
        </styles.Navlist1>
      </styles.Taskbarcontainer>


      {/* Hình ảnh */}
      <styles.Imagecontainer>
        <styles.ImageGardenIcon alt="" src="/tomato.png" />
        <styles.Headerimagecontainer>
          <styles.ButtoneditIcon alt="" src="/edit.png" />
          <styles.Imagetitle>Hình ảnh</styles.Imagetitle>
        </styles.Headerimagecontainer>
      </styles.Imagecontainer>

      {/* Bảng điều khiển */}
      <styles.Controllercontainer>
        <styles.Controltitle>Điều khiển</styles.Controltitle>
        {/* Bật đèn */}
        <styles.Turnlightcontainer>
          <styles.Lightcontainer>
            <styles.Boxlighttext>
              <styles.Buttonlight onClick={handleButtonLightClick}>
                <styles.ButtonlightItem shifted={shiftedLight} />
              </styles.Buttonlight>
              <styles.Textlight>Bật tắt đèn</styles.Textlight>
            </styles.Boxlighttext>
            <styles.Lighticon alt="" src="/lighton.png" />
          </styles.Lightcontainer>
        </styles.Turnlightcontainer>
        {/* Bật nước */}
        <styles.Turnwatercontainer>
          <styles.Wateringcontainer>
            <styles.Boxwatertext>
            <styles.Buttonlight onClick={handleButtonWaterClick}>
                <styles.ButtonlightItem shifted={shiftedWater} />
              </styles.Buttonlight>
              <styles.Textlight>Tưới nước</styles.Textlight>
            </styles.Boxwatertext>
            <styles.Wateringicon alt="" src="/watering.png" />
          </styles.Wateringcontainer>
        </styles.Turnwatercontainer>
      </styles.Controllercontainer>
      
      {/* Biểu đồ nhiệt độ */}
      <styles.TempGraph>
        <styles.Dropdown1Container>
          <select
            value={selectedTempRange}
            onChange={handleTempDropdownChange}
            style={{
              padding: '4px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: '1px solid #056C09',
              borderRadius: '4px',
              backgroundColor: '#EBFFE2'
            }}
          >
            <option value="24h">24 giờ qua</option>
            <option value="7d">7 ngày qua</option>
            <option value="30d">30 ngày qua</option>
          </select>
        </styles.Dropdown1Container>
        <div id="tempChart" style={{ height: '450px', width: '100%' }}></div>
      </styles.TempGraph>

      {/* Biểu đồ độ ẩm */}
      <styles.HumiGraph>
        <styles.Dropdown2Container>
          <select
            value={selectedHumidRange}
            onChange={handleHumidDropdownChange}
            style={{
              padding: '4px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: '1px solid #056C09',
              borderRadius: '4px',
              backgroundColor: '#EBFFE2'
            }}
          >
            <option value="24h">24h qua</option>
            <option value="7d">7 ngày qua</option>
            <option value="30d">30 ngày qua</option>
          </select>
        </styles.Dropdown2Container>
        <div id="humidChart" style={{ height: '450px', width: '100%' }}></div>
      </styles.HumiGraph>
      
       {/* Biểu đồ ánh sáng */}
       <styles.LightGraph>
        <styles.Dropdown3Container>
          <select
            value={selectedLightRange}
            onChange={handleLightDropdownChange}
            style={{
              padding: '4px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: '1px solid #056C09',
              borderRadius: '4px',
              backgroundColor: '#EBFFE2'
            }}
          >
            <option value="24h">24 giờ qua</option>
            <option value="7d">7 ngày qua</option>
            <option value="30d">30 ngày qua</option>
          </select>
        </styles.Dropdown3Container>
        <div id="lightChart" style={{ height: '450px', width: '100%' }}></div>
      </styles.LightGraph>
      
      {/* Biểu đồ độ ẩm đất */}
      <styles.SoilGraph>
        <styles.Dropdown4Container>
            <select
              value={selectedSoilRange}
              onChange={handleSoilDropdownChange}
              style={{
                padding: '4px',
                fontSize: '18px',
                fontWeight: 'bold',
                border: '1px solid #056C09',
                borderRadius: '4px',
                backgroundColor: '#EBFFE2'
              }}
            >
              <option value="24h">24 giờ qua</option>
              <option value="7d">7 ngày qua</option>
              <option value="30d">30 ngày qua</option>
            </select>
          </styles.Dropdown4Container>
          <div id="soilChart" style={{ height: '450px', width: '100%' }}></div>
      </styles.SoilGraph>
      
    </styles.DashboardRoot>

  );
};

export default Dashboard;

