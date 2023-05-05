import { USERS } from "./Users";

export const POSTS=[
{
    imageUrl: 'https://wizarddojo.files.wordpress.com/2015/06/23.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'How\' moving castle',
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