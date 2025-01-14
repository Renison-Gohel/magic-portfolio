import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Renison',
    lastName:  'Gohel',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Cyber security enthusiast, Dev',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi', 'Gujarati']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Send Messages to {person.firstName}'s Whatsapp</>,
    description: <>If you have same interests like Cybersecurity, technology, and share thoughts on the intersection of latest trends and technology in development and engineering, then let's connect</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Renison-Gohel',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/renison-gohel-reni-christian-a589531b0/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:renisonreni@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Cybersecurity enthusiast & Developer</>,
    subline: <>I'm Renison, a student at <InlineCode>NFSU</InlineCode>, where I craft my cyber<br/> skills. I'm passionate about <InlineCode>CYBERSECURITY</InlineCode> and <InlineCode>TOOLS DEVELOPMENT</InlineCode>.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Renison Gohel is the National Forensic Sciences University student, specializing in Digital Forensics and Information Security. With a passion for leveraging technology to tackle real-world challenges, he focuses on building innovative tools to assist law enforcement agencies in tasks such as investigations, OSINT, and custom solution development. Combining a strong foundation in technical skills with hands-on experience in the latest technologies, he thrives on transforming ideas into practical solutions that empower agencies and contribute to maintaining law and order.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'OPPO x ColorOS',
                timeframe: '2022 - Present',
                role: 'Senior Alpha Tester',
                achievements: [
                    <>Find Bugs and Problems in the private program of the unreleased devices and ColorOS Custom Rom of OPPO and then base of OnePlus & Realme.</>,
                    <>Reported Valid Bugs and Problems in Devices & on the ColorOS to the development team</>,
                    <>Awarded for my exceptional contributions during the ColorOS Beta Trial, where I played a critical role in identifying key issues and providing feedback to enhance the OS’s performance. Through detailed bug reporting and insightful suggestions, I worked closely with the development team to shape a more seamless and user-friendly experience for ColorOS users.</>,
                    <>Recognized as a Key Contributor in the development of ColorOS 11 for my role in reporting critical bugs and proposing feature enhancements. By identifying over many bugs and providing actionable suggestions, I helped the engineering team refine the user experience and drive innovation in the OS. Proud to have contributed to the evolution of one of the most widely used Android Custom Rom.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-02/cover-01.jpg',
                        alt: 'Outstanding Contribution Award',
                        width: 16,
                        height: 18
                    },
                    {
                        src: '/images/projects/project-02/cover-02.jpg',
                        alt: 'ColorOS 11 Special Momento',
                        width: 16,
                        height: 18
                    },
                    // {
                    //     src: '/images/projects/project-02/cover-06.jpg',
                    //     alt: 'Certificate of Senior Alpha Tester',
                    //     width: 16,
                    //     height: 18
                    // }
                ]
            },{
                company: 'Optimus WebTech',
                timeframe: '2023 - 2024',
                role: 'Answer Team Member',
                achievements: [
                    <>Developed and Maintain Web Applications on the Teach Stack of React.js, Next.js, Laravel. Implemented Databases such as: MongoDB, Supabase, MySQL</>,
                    <>Gather various large open data by Data mining using Python language: Scrapy, Selenium, Playwright.</>
                ],
                images: [ ]
            },
            {
                company: 'ColorOS',
                timeframe: '2018 - 2021',
                role: 'Answer Team Member',
                achievements: [
                    <>Led a Alpha & Beta team to find and report bugs and forward valid bugs to the OS Engineering Team</>,
                    <>Honored to be part of the ColorOS Creators Planet Answer Team, where my role was in shaping the evolution of ColorOS 7. From providing critical insights to ensuring testers' valid bugs were escalated to the engineering team, my contributions helped enhance the OPPO x ColorOS's performance and user experience. Proud to have been a driving force behind ColorOS’s continued success in winning users' hearts.</>,
                    <>Recognized as the Top Performer for my role as an OPPO Community Moderator, where I successfully guided and managed a diverse group of tech bloggers, creators, and content experts. By fostering collaboration, providing strategic insights, and ensuring high-quality content, I helped build a thriving and engaged community that contributed to the growth of OPPO’s online presence.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-02/cover-04.jpg',
                        alt: 'ColorOS 7 Answer Team Special Momento',
                        width: 16,
                        height: 22
                    },
                    {
                        src: '/images/projects/project-02/cover-05.jpg',
                        alt: 'Certificate of Answer Team',
                        width: 16,
                        height: 22
                    }
                 ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'National Forensic Sciences University',
                description: <>Pursuing a Master degree in Digital Forensic & Information Security.</>,
            },
            {
                name: 'Saurashtra University',
                description: <>Studied Bachlor's of Computer Applications.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Cybersecurity',
                description: <>Offensive mindset to Defense the Information Systems. Building Tools that Helps Law Enforcement Agencies.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-02/cover-07.jpg',
                        alt: 'OSINT Tool for Law Enforcement Agencies',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-02/cover-08.jpg',
                        alt: 'PII Data',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-02/cover-07.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'React.js',
                description: <>Building next gen web apps with React + TailwindCSS + Framer Motion.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };