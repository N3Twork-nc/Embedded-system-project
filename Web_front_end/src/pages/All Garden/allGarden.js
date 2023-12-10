import React, {useState, useEffect } from 'react';
import * as styles from './styleAllGarden.js';
import Plotly from 'plotly.js-dist';
import { fonts } from '../../global.js'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const AllGarden = () => {
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();
      const formattedHour = format(currentDateTime, "hh:mm a"); // Format thời gian theo 12 giờ và AM/PM
      setCurrentHour(formattedHour);
    }, 1000); // Cập nhật thời gian mỗi giây

    return () => clearInterval(intervalId);
  }, []);


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

const saveData = () => {
  console.log(`Tên vườn: ${tenVuon}, Vị trí: ${viTri}, Cây trồng: ${cayTrong}`);
  hideModal();
};


 
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
         
     {/* Tất cả khu vườn */}
      <styles.AllGardenContainer>
   
        <styles.GardenContainer>
          <styles.GardenName>Vườn 1</styles.GardenName>
          <styles.GardenImageContainer alt="" src="/tomato.png"/>
          <styles.ButtonOptionContainer>
            <styles.ButtonOptionItems1  alt="" src="/bin.png"/>
          </styles.ButtonOptionContainer>
        </styles.GardenContainer>
        
      </styles.AllGardenContainer>
      
   
    {/* Taskbar */}
      <styles.Taskbarcontainer>
        <styles.Taskbar />
        <styles.ItemAboutUs>
          <styles.IconAboutUs alt="" src="/icon-about-us.svg" />
          <styles.AboutUs style={{ cursor: 'default'}} >About us</styles.AboutUs>
        </styles.ItemAboutUs>
        <styles.ItemAllGardens>
          <styles.TtCKhu style={{ cursor: 'default', color: '#24FF00'}}>Tất cả khu vườn</styles.TtCKhu>
          <styles.IconAllGardern alt="" src="/icon-all-gardern.svg" />
        </styles.ItemAllGardens>
        <styles.ItemDashboard>
          <Link to="/">
             <styles.Dashboard1 style={{ cursor: 'default', color: '#FFF'}}>Dashboard</styles.Dashboard1>
          </Link>
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

    </styles.DashboardRoot>

  );
};

export default AllGarden;

