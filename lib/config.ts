interface EmailProps {
    username: string;
    domain: string;
}

interface UserProps {
    firstName: string;
    surname: string;
    email: EmailProps;
}

interface DisqusProps {
    shortname: string;
}

interface ProfileImageProps {
    path: string;
    width: number;
    height: number;
}

interface AnalyticsProps {
    token: string;
}

interface ConfigProps {
    url: string;
    maxHomePagePosts: number;
    disqus: DisqusProps;
    user: UserProps;
    profileImage: ProfileImageProps;
    analytics: AnalyticsProps;
}

const Config: ConfigProps = {
    url: 'https://www.ericturner.dev',
    maxHomePagePosts: 5,
    disqus: {
        shortname: 'ericturnerdev'
    },
    user: {
        firstName: 'Eric',
        surname: 'Turner',
        email: {
            username: 'info',
            domain: 'ericturner.dev'
        },
    },
    profileImage: {
        path: '/images/kayak-sailing.jpg',
        width: 400,
        height: 425
    },
    analytics: {
        token: 'b4d83cf5c97b483594f68da0b953ad70'
    }
};

export default Config;