export const cards = [
  {
    company: 'Page Financial',
    title: 'Frontend Developer',
    src: '/images/Page_logo.png',
    images: ['/images/Meld-shot.jpeg'],
    ctaText: 'View',
    ctaLink: 'https://pagefinancials.com/',
    period: 'August 2022 - Present',
    content: () => {
      return (
        <p>
          At Page Financial, I led the development of a highly scalable HRMS
          application (Meld) using Next.js, TypeScript, and Tailwind CSS,
          resulting in significant enhancements in system performance. I built
          an advanced replica of Google Forms within the application, featuring
          the capability to direct specific questions to selected individuals in
          the organization.
          <br /> <br /> I also developed a comprehensive payroll feature from
          scratch to manage the organization&apos;s payments efficiently and
          created a customizable setup section for fields and documents,
          enabling the organization to define mandatory user fields.
        </p>
      );
    },
  },
  {
    company: 'Tecmie LTD',
    title: 'Software Engineer',
    src: '/images/tecmie.svg',
    images: ['/images/applybetter-shot.png'],
    ctaText: 'View',
    ctaLink: 'https://tecmie.com/',
    period: 'November 2022 - Present',
    content: () => {
      return (
        <p>
          At Tecmie, I played a pivotal role in developing ApplyBetter, a
          comprehensive job search and application tracking system using
          Next.js, TypeScript, Tailwind CSS, TRPC, and Supabase. I built a range
          of sophisticated features to enhance job application management. Users
          can create accounts, upload professional details, and utilize an AI
          assistant to draft their resumes. <br /> <br /> The AI assistant also
          identifies and recommends job roles that match user profiles. I
          developed an auto-apply feature that submits personalized
          applications, including tailored messages, resumes, and cover letters,
          on behalf of users. The platform also helps users discover top
          companies based on fit and compensation, evaluate job opportunities
          with detailed criteria, and track their applications seamlessly.
          Furthermore, I integrated real-time updates by syncing users inboxes,
          calendars, and drives.
        </p>
      );
    },
  },

  {
    company: 'Landa Learn',
    title: 'Frontend Developer',
    src: '/images/landa.svg',
    images: ['/images/landa-learn-shot.png'],
    ctaText: 'View',
    ctaLink: 'https://landalearn.com/',
    period: 'July 2023 - October 2023',
    content: () => {
      return (
        <p>
          At Landa Learn, I engineered the course platform using Next.js and
          TypeScript, focusing on developing responsive and intuitive user
          interfaces, leading to enhanced user engagement and satisfaction. I
          integrated Stripe and Paystack into the payment feature and oversaw
          the implementation of the course-creation editor form throughout the
          application, ensuring its consistent functionality and usability.{' '}
          <br /> <br /> Additionally, I successfully trained and mentored a
          group of interns, helping them develop their skills and contribute
          effectively to the team&apos;s projects.
        </p>
      );
    },
  },
  {
    company: 'On Time In Full (OTIF)',
    title: 'Frontend Developer',
    src: '/images/otif.svg',
    ctaText: 'View',
    ctaLink: 'https://ui.aceternity.com/templates',
    period: 'January 2021 - October 2022',
    images: ['/images/otif-shot.jpeg'],
    content: () => {
      return (
        <p>
          At OTIF, I developed and maintained the freight tracking section using
          React.js and Bootstrap to monitor and manage shipments in real time,
          ensuring accurate delivery schedules and order statuses for express
          shipping, truck freight, and sea freight. <br /> <br /> I built a
          comprehensive dashboard that includes a variety of charts and graphs
          to track OTIF (On-Time In-Full) performance over time and integrated
          advanced filters to allow for detailed data analysis and better
          decision-making. Additionally, I conducted daily maintenance of code,
          debugging issues, and resolving client problems.
        </p>
      );
    },
  },
];
