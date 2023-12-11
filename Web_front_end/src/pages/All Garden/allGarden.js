import React, {useState, useEffect } from 'react';
import * as styles from './styleAllGarden.js';
import { fonts } from '../../global.js';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { myGarden, getDetailGardens } from '../../api/garden.js'

const AllGarden = () => {
  const infoUser=useSelector(state=>state.infoUser);
  const isAuth=useSelector(state=>state.auth)["isLoggedIn"]
  const token=useSelector(state=>state.auth)["token"]["payload"]
  const [gardensData, setgardensData] = useState([]);

  useEffect(() => {  
    savedGarden();
   }, []);
 

  const savedGarden = async () => {
    try {
      const gardenDetails = await getDetailGardens(token);
      setgardensData(gardenDetails);
      const action=updateMyGarden(gardenDetails)
      dispatch(action)
    } catch (error) {
      console.log(error);
    }
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
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDI1MzAxOTksInVzZXJuYW1lIjoiTiJ9.-UCJafhaOKKMlE4BbP9Ntq3NIgwRmCByFnmtkjRCxYk'; 

    // Gọi hàm myGarden
    const response = await myGarden(gardenName, location, cropType, token);

    console.log('Result:', response);
    hideModal(); 
  } catch(error) {
    console.error('Error:', error);
    hideModal(); 
  };
};

// Chỉnh sửa vườn
const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };


 
  return (
    <styles.DashboardRoot>
    {/* Header */}
      <styles.Webheadercontainer>
          <styles.Dashboard2 style={{cursor: 'default'}}>All garden</styles.Dashboard2>
          <styles.AddgardenContainer>
            <styles.Addgardenitems>
              <styles.Icongarden alt="" src="/icongarden.svg" />
              <styles.TextAddGarden style={{cursor: 'default'}}>Thêm vườn</styles.TextAddGarden>
              <styles.Iconaddgarden alt="" src="/add.png" onClick={showModal} />
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
              <styles.NguynTrBo style={{cursor: 'default'}}> {infoUser.fullname}</styles.NguynTrBo>
            </styles.Nametext>

            <styles.Locatetext style={{cursor: 'default'}}>{infoUser.address}</styles.Locatetext>
          </styles.ContainerInfoUser>
        </styles.Userinfocontainer>

      </styles.Maininforcontainer>
         
     {/* Tất cả khu vườn */}
      <styles.AllGardenContainer>
        {gardensData.map((garden, index) => (
          <styles.GardenContainer key={index}>
            <styles.GardenName>Vườn {garden.gardenname}</styles.GardenName>
            <styles.GardenImageContainer alt="" src="/tomato.png" />
            <styles.ButtonOptionContainer>
              <styles.ButtonOptionDelete alt="Delete" src="/bin.png" />
              <styles.ButtonOptionEdit alt="Edit" src="/editing.png" />
            </styles.ButtonOptionContainer>
          </styles.GardenContainer>
        ))}
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
          <Link to="/dashboard">
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
        </styles.Navlist1>
      </styles.Taskbarcontainer>

    </styles.DashboardRoot>

  );
};

export default AllGarden;

