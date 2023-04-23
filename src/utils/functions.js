import {useLocation, useParams} from 'react-router-dom';

function GetPathName() {
    const location = useLocation();
    const uri = String(location.pathname);
    return uri;
}
function GetSlug() {
    const slug = Object(useParams());
    return String(slug?.slug) ? String(slug.slug) : null;
}
export default {
    GetPathName,
    GetSlug
};