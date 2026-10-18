export interface Project {
  title: string
  tags: string[]
  description?: string
  points?: string[]
  link?: { label: string; href: string }
  /** Folder under public/projects, images are listed in `images`. */
  folder?: string
  images?: string[]
  embed?: string
}

export interface Job {
  role: string
  company?: string
  period: string
  points: string[]
  current?: boolean
}

export const profile = {
  name: 'Gustav Linde',
  title: 'Software Engineer',
  tagline: 'I use code to talk to the world, including the physical systems and devices behind it.',
  summary:
    'I take a practical and logical approach to problem-solving, always aiming for the simplest and most effective solution, and I believe collaboration is essential to the best outcomes. Involving customers and end users throughout development is what makes a solution succeed.',
}

export const experience: Job[] = [
  {
    role: 'Software Engineer',
    company: 'Netelek',
    period: 'Jan 2022 – Present',
    current: true,
    points: [
      'Develop and maintain enterprise web platforms with Spring Boot (Java 17, 21), Vue.js and Knockout.js, using RESTful APIs between backend applications and the front end. Several of these let one interface talk to many devices.',
      'High-performance data processing, caching and distributed computing with Apache Ignite.',
      'Work with RS485 and protocols such as DLMS, Modbus and TCP/IP for data transfer between devices and systems.',
    ],
  },
  {
    role: 'Design Engineer',
    company: 'VZS',
    period: 'Apr 2020 – Dec 2021',
    points: [
      'Programmed and designed a large CNC machine that measures and cuts accurately pitched belting for potato harvesters.',
      'Design, SolidWorks modelling, 2D manufacturing drawings, quotations, client service, site visits and manufacturing management for agricultural equipment and packaging houses.',
    ],
  },
  {
    role: 'G4ce Electronics',
    period: 'Jan 2020 – Apr 2020',
    points: [
      'Prototyped a cookie icing machine: OpenCV and Python detect and centre each cookie before a GRBL controller does the icing.',
      'Designed replaceable gauges for vintage Porsches converted to EV.',
      'Ran a webshop for electronic components (Arduinos and breakout modules): ordering, stock, shop maintenance and customer support. Closed due to Covid lockdown.',
    ],
  },
  {
    role: 'IoT Access Control System',
    company: 'University of Pretoria',
    period: 'Jan 2019 – Dec 2019',
    points: [
      'Managed, designed and built an IoT RFID access control system. Each tap logs user and machine data to set service intervals and improve workshop management.',
    ],
  },
  {
    role: 'Python Tutor (part time)',
    company: 'BJC Tutoring',
    period: 'Mar 2017 – Dec 2017',
    points: ['Tutored university students in Python.'],
  },
]

export const education = {
  degree: 'B.Eng (Mechanical)',
  school: 'University of Pretoria',
  period: 'Jan 2015 – Dec 2019',
}

export const projects: Project[] = [
  {
    title: 'Common Sense',
    tags: ['Java 17', 'Spring Boot', 'Vue 3', 'Vuetify', 'MySQL', 'Google Cloud'],
    description:
      'A CRM for a short-term insurance brokerage, built for my mother\'s business and grown into a multi-tenant platform. It manages clients, policies and assets, parses insurer schedule PDFs, generates renewal letters, tracks claims and quotations, and produces Record of Advice documents that clients sign online through a secure link.',
    points: [
      'Spring Boot REST backend with one database per brokerage and a central tenant registry',
      'Vue 3 + Vuetify frontend, plus a public sales site in Afrikaans and English',
      'Form definitions in JSON that drive both the web form and the generated PDF',
      'Production on a Google Cloud VM with nightly backups',
    ],
    link: { label: 'Visit the sales site', href: 'https://www.common-sense.co.za' },
  },
  {
    title: 'Automated Bottle Filling System',
    tags: ['OpenCV', 'Python', 'CNC'],
    description:
      'A computer vision system that detects bottle positions and drives a CNC machine to position and fill them automatically.',
  },
  {
    title: 'CNC Lathe Conversion',
    tags: ['Control software', 'Retrofit', 'Machining'],
    description: 'Converted a standard Adendorff lathe into a CNC machine, including the control software.',
  },
  {
    title: 'Sand Table Controller',
    tags: ['ESP32', 'mDNS provisioning'],
    description: 'An ESP32-based sand table controller with mDNS provisioning for easy network setup.',
  },
  {
    title: 'PIT-tag Bird Tracker',
    tags: ['ESP32', 'RFID', 'Data logging'],
    description: 'An ESP32-based bird tracker built around PIT tags.',
  },
  {
    title: 'Desktop CNC Router',
    tags: ['Fusion 360', 'Python', 'GRBL'],
    description: 'A desktop-sized CNC router, designed in CAD and driven from Python over GRBL.',
    embed:
      'https://gmail190897.autodesk360.com/shares/public/SH35dfcQT936092f0e4337bab64a68f2018e?mode=embed',
  },
  {
    title: 'Electric Motor Build',
    tags: ['Winding', 'Hall effect sensors', 'Arduino'],
    description: 'Building an electric motor from scratch (EIR321, 2020).',
    folder: 'EIR321 Motor',
    images: [
      'WhatsApp Image 2020-04-28 at 20.12.32 (1).jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.28.jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.29 (1).jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.29.jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.31.jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.32 (2).jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.32.jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.33.jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.34 (1).jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.34.jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.35.jpeg',
      'WhatsApp Image 2020-04-28 at 20.12.36.jpeg',
    ],
  },
  {
    title: 'Corrugated Zinc Wall',
    tags: ['Carpentry', 'Building'],
    description: 'A corrugated zinc wall, from bare frame to finished (2020).',
    folder: 'Zink Muur',
    images: [
      '20200613_154843.jpg',
      '20200613_154907.jpg',
      '20200613_154916.jpg',
      '20200613_154927.jpg',
      '20200810_155651.jpg',
      '20200810_155702.jpg',
      '20200924_102759.jpg',
    ],
  },
  {
    title: 'Clock from Reclaimed Pallet Wood',
    tags: ['Carpentry', 'Electronics', 'RTC'],
    folder: 'WoodClock',
    images: ['IMG_1212.JPG'],
  },
]

export const skills: Record<string, string[]> = {
  Languages: ['Java', 'TypeScript', 'JavaScript', 'Python', 'Bash', 'MS SQL', 'MySQL', 'C++', 'HTML', 'CSS'],
  Frameworks: ['Spring Boot', 'Hibernate', 'Vue.js', 'Vuetify', 'Knockout.js', 'Node.js', 'Puppeteer', 'OpenCV'],
  'Infrastructure & messaging': [
    'Apache Ignite', 'Artemis ActiveMQ', 'HAProxy', 'Apache HTTP Server', 'Docker', 'Ubuntu Server', 'MQTT', 'WebSockets',
  ],
  'Devices & protocols': ['RS485', 'DLMS', 'Modbus', 'TCP/IP', 'Arduino', 'ESP32', 'Raspberry Pi', 'GRBL'],
  'Integrations & tools': [
    'Google APIs', 'WhatsApp Business Platform', 'QuickBooks API', 'OpenAPI / Swagger', 'Asana', 'Git', 'Subversion', 'Maven', 'VS Code', 'NetBeans', 'Vim',
  ],
  'CAD & making': ['SolidWorks', 'Fusion 360', 'Soldering', 'Carpentry', 'Lathe & milling', 'Arc & MIG welding'],
}

export const links = [
  { label: 'g4gustav@gmail.com', href: 'mailto:g4gustav@gmail.com', icon: 'mdi-email-outline' },
  { label: '072 432 8395', href: 'tel:+27724328395', icon: 'mdi-phone-outline' },
  { label: 'GitHub', href: 'https://github.com/Gustav-Linde', icon: 'mdi-github' },
  { label: 'common-sense.co.za', href: 'https://www.common-sense.co.za', icon: 'mdi-open-in-new' },
]
