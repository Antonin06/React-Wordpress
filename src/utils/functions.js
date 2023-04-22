import {useLocation } from 'react-router-dom';

function GetPathName() {
    const location = useLocation();
    const uri = String(location.pathname);
    return uri;
}
export default {
    GetPathName
};