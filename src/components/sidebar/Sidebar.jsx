import React from 'react';
import './sidebar.css';
import { People } from '@material-ui/icons';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Sidebar() {
    return (
        <div className="Container Flipped ">
            <div className="sidebarWrapper ">
                <div className="sidebarMenu">
                    <ul className="sidebarList">

                            <li className="sidebarListItem">
                               <BusinessRoundedIcon className="sidebarIcon" style={{ color: 'purple' }} /> 
                                شرکتها    
                            </li>

                            <li className="sidebarListItem">
                                 <DashboardOutlinedIcon className="sidebarIcon" style={{ color: 'red' }}/> 
                                میزکار  

                            </li>
                            <li className="sidebarListItem">
                               <AccountBoxRoundedIcon className="sidebarIcon" style={{ color: '#ffa500' }}/> 
                                کاربران        
                            </li>
                            <li className="sidebarListItem">
                              <AccessTimeRoundedIcon className="sidebarIcon" style={{ color: '#c35817' }}/> 
                                ورود و خروج  
                            </li>

                           <li className="sidebarListItem">
                             <ListAltRoundedIcon className="sidebarIcon" style={{ color: '#ffd801' }}/> 
                                لیست کارها  
                            </li>
                            <li className="sidebarListItem">
                             <StorageRoundedIcon className="sidebarIcon"  style={{ color: '#bce954' }}/> 
                                پایگاه داده
                            </li>
                            <li className="sidebarListItem">
                            <SsidChartOutlinedIcon className="sidebarIcon" style={{ color: '#3ea055' }}/> 
                                نمودارها
                            </li>
                            <li className="sidebarListItem gozareshchecklist">
                             <SummarizeOutlinedIcon className="sidebarIcon" style={{ color: '#0080ff' }}/> 
                                گزارش چک لیست
                            </li>
                            <li className="sidebarListItem">
                             <BackupTableRoundedIcon className="sidebarIcon" style={{ color: '#111e6c' }}/> 
                                برد متنا
                            </li>
                            <li className="sidebarListItem">
                              <EventNoteOutlinedIcon className="sidebarIcon" style={{ color: 'lightpink' }}/> 
                                مخاطبین
                            </li>
                            <li className="sidebarListItem">
                               <QrCode2OutlinedIcon className="sidebarIcon" style={{ color: '#FF1493' }}/> 
                                بارکدخوان
                            </li>
                            <li className="sidebarListItem">
                               <QrCodeOutlinedIcon className="sidebarIcon" style={{ color:'#FF69B4' }}/> 
                                دریافت بارکد
                                
                            </li>
                            <li className="sidebarListItem">
                               <SupportAgentOutlinedIcon className="sidebarIcon" style={{ color:'#913831' }}/> 
                                پشتیبانی
                                
                            </li>
                            <li className="sidebarListItem">
                               <FaceOutlinedIcon className="sidebarIcon" style={{ color:'purple' }}/>
                                پروفایل
                                
                            </li>
                            <li className="sidebarListItem">
                               <HistoryEduOutlinedIcon className="sidebarIcon" style={{ color: '#bce954' }}/>
                                تاریخچه فرمان   
                            </li>
                            <li className="sidebarListItem">
                              <SettingsOutlinedIcon className="sidebarIcon" style={{ color:'#913831' }}/> 
                                تنظیمات
                              <ChevronLeftOutlinedIcon fontSize='small' className='chevron'/>
                            </li>
                            <li className="sidebarListItem">
                               <People className="sidebarIcon"/>
                                باقی موارد  
                            </li>
                            <li className="sidebarListItem">
                               <People className="sidebarIcon"/>
                                خروج   
                            </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
