import { USERS } from "./Users";

export const POSTS=[
{
    imageUrl: 'https://wizarddojo.files.wordpress.com/2015/06/23.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'How\' moving castle  \nLâu đài bay của pháp sư Howl, hay Lâu đài di động của Howl, là một bộ phim điện ảnh hoạt hình Nhật Bản thuộc thể loại kỳ ảo năm 2004 do Miyazaki Hayao đạo diễn kiêm viết kịch bản, dựa trên tiểu thuyết cùng tên năm 1986 của nữ tác giả người Anh Diana Wynne Jones.',
    profile_picture: USERS[0].image,
    comments:[
        {
            user:'bơ',
            comment: 'Cool'
        },
        {
            user:'dưa hấu',
            comment: 'Love it'    
        }
    ]
    
},
{
    imageUrl: 'https://pic-bstarstatic.akamaized.net/ugc/3c8c48f2dadff8351ae4d73150cec086f5d1bb41.jpg',
    user: USERS[1].user,
    likes: 7872,
    caption: 'Harry Potter bủh',
    profile_picture: USERS[1].image,
    comments:[
        {
            user:'bơ',
            comment: 'Cool'
        },
   
    ]
    
}
]