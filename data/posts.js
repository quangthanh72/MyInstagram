import { USERS } from "./Users";

export const POSTS=[
{
    imageUrl: 'https://ss-ava.saostar.vn/w800/pc/1615604842998/harry-potter-chinh-thuc-tai-ngo-khan-gia-viet-tren-man-anh-rong-sau-10-nam-e39-5628267(1).jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Harry Potter',
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
    imageUrl: 'https://i.pinimg.com/564x/24/44/c9/2444c9b509143065e9df99ad0ae9685d.jpg',
    user: USERS[1].user,
    likes: 7870,
    caption: 'Harry Potter bủh',
    profile_picture: USERS[1].image,
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
    
}
]