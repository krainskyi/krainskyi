import s from "./MyPosts.module.css";
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                My post
               <Post message='test message props' likesCount='1' disLikeCount='19'/>
                <Post message='new test 2 message props' likesCount='23' disLikeCount='1'/>

            </div>
        </div>
    )
}
export default MyPosts ;
