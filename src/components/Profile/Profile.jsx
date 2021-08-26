import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img alt='image' src='https://prestige.kherson.ua/wp-content/uploads/2017/11/fon.jpg'/>
            <div>
                Ava _discription
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;
