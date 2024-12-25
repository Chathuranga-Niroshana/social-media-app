import { Post } from "../model/post";

const MILLISECONDS_IN_HOUR = 3600000

export const POSTS: Post[] = [
    {
        id: 'PostA',
        user: 'User1',
        text: 'This is my first post',
        createdDate: Date.now(),
    },
    {
        id: 'PostB',
        user: 'User2',
        text: 'This is my second post',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostC',
        user: 'User1',
        text: 'This is my 3rd post',
        createdDate: Date.now() - 2 * MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostD',
        user: 'User3',
        text: 'This is my 4th post',
        createdDate: Date.now() - 3 * MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostE',
        user: 'User1',
        text: 'This is my 5th post',
        createdDate: Date.now() - 4 * MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostF',
        user: 'User2',
        text: 'This is my 6th post',
        createdDate: Date.now() - 5 * MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostG',
        user: 'User1',
        text: 'This is my 7th post',
        createdDate: Date.now() - 6 * MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostH',
        user: 'User3',
        text: 'This is my 8th post',
        createdDate: Date.now() - 7 * MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostI',
        user: 'User1',
        text: 'This is my 7th post',
        createdDate: Date.now() - 6 * MILLISECONDS_IN_HOUR,
    },
    {
        id: 'PostJ',
        user: 'User3',
        text: 'This is my 8th post',
        createdDate: Date.now() - 7 * MILLISECONDS_IN_HOUR,
    },
]
