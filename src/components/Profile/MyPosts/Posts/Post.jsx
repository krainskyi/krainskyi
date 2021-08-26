import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img alt='image'
                     src='https://scontent.fiev11-1.fna.fbcdn.net/v/t1.6435-9/69199923_2415627725162101_7050583450864058368_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dJsbJSBMVJ0AX_CDZ4y&_nc_ht=scontent.fiev11-1.fna&oh=a6742094471860c1899c9f775a9b1384&oe=60D7997B'/>
                text post
                <div className={s.like}>
                    <span>Like
                        <span className={s.likeCount}>{props.likesCount}</span>
                    </span>
                    <span className={s.disLike}>
                        DisLike <span className={s.disLikeCount}>{props.disLikeCount}</span></span>
                </div>
            </div>

        </div>
    )
}
export default Post;
