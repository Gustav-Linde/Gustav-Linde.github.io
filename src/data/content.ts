export interface Project {
  title: string
  tags: string[]
  description?: string
  points?: string[]
  link?: { label: string; href: string }
  /** Folder under public/projects, images are listed in `images`. */
  folder?: string
  images?: string[]
  /** 'hero': the first image spans a 2 x 2 block with the rest beside it (needs 5 images). */
  layout?: 'hero'
  /** Show the smaller images whole instead of cropping them to fill the tile (for screenshots). */
  fit?: 'contain'
  embed?: string
  /** Videos in the project's folder; `ratio` is width / height so mixed shapes line up. */
  videos?: { file: string; poster: string; ratio: number }[]
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
      'The screens shown use sample data. The app itself is in Afrikaans, the language of its users',
    ],
    folder: 'CommonSense',
    layout: 'hero',
    fit: 'contain',
    images: ['hero.png', 'dashboard.png', 'client-record.png', 'schedule-analysis.png', 'record-of-advice.png'],
    link: { label: 'Visit the sales site', href: 'https://www.common-sense.co.za' },
  },
  {
    title: 'RC Airplane: Best Design Award',
    tags: ['Best Design award', 'Aerodynamics', 'RC aircraft', 'Team project'],
    description:
      'A university group project: we designed and built a radio-controlled airplane using the same aerodynamic principles as a full-size aircraft, and entered it in an engineering competition between universities, where we won the Best Design award. The challenge was to load as many tennis balls as possible onto the plane, fly around, land and drop them in a bucket within a set time. The team with the most balls at the end wins.',
    folder: 'RCPlane',
    images: ['rc-plane.jpg'],
  },
  {
    title: 'Kitchen Cabinets',
    tags: ['Fusion 360', 'CAD', 'Cabinet making', 'Installation'],
    description:
      'Kitchen cabinets for one of my apartments, taken from design to a finished kitchen. I designed everything in Fusion 360, had the panels cut and edged at Lumber King, then assembled and installed the cabinets myself.',
    points: [
      'Design: the full upper and lower runs modelled in Fusion 360, with doors, drawers and the sink and hob positions worked out up front',
      'Cutting and edging: panels cut and edge-banded at Lumber King from the CAD design',
      'Assembly: carcasses, drawers and door fronts put together and clamped by myself',
      'Installation: base units levelled and fitted, worktop with built-in sink and two-plate hob, and wall cabinets hung',
    ],
    folder: 'Kitchen',
    images: [
      'finished-kitchen.jpg',
      'fusion-design.jpg',
      'cut-panels.jpg',
      'carcasses.jpg',
      'base-units-worktop.jpg',
      'drawer-front.jpg',
      'installation.jpg',
      'finished-side.jpg',
      'finished-room.jpg',
      'door-grain.jpg',
      'sink-worktop.jpg',
      'drawer-box.jpg',
      'finished-hall.jpg',
    ],
  },
  {
    title: 'Automated Bottle Filling System',
    tags: ['OpenCV', 'Python', 'CNC'],
    description:
      'A computer vision system that detects bottle positions and drives a CNC machine to position and fill them automatically. An overhead camera is calibrated with a checkerboard, and the detected positions are turned into machine coordinates. Washers stand in for bottles in these tests.',
    folder: 'BottleFiller',
    images: ['bed-camera.jpg', 'detection-screen.jpg', 'calibration.jpg', 'workshop.jpg', 'programming.jpg'],
    videos: [
      { file: 'arm-move.mp4', poster: 'arm-move-poster.jpg', ratio: 716 / 1536 },
      { file: 'detection.mp4', poster: 'detection-poster.jpg', ratio: 848 / 396 },
    ],
  },
  {
    title: 'Cookie Icing Machine',
    tags: ['OpenCV', 'Python', 'GRBL', '3D printing', 'Prototype'],
    description:
      'A prototype machine that ices cookies automatically. A camera looks down on the cookie, OpenCV and Python work out exactly where it sits, and a GRBL controller then drives the icing nozzle to the right place. Built from a 3D-printed frame and rails, with an icing cartridge and nozzle mounted on a moving carriage.',
    points: [
      'Image recognition: the camera image is filtered by colour (HSV thresholding) into a mask, and the cookie outline is found as a contour, filtered by contour length to ignore noise',
      'Centring: the centre of the contour is marked with a crosshair, and the offset from the machine\'s reference point tells it how far the cookie is off-centre',
      'Motion: the corrected position is sent to the GRBL controller over serial, which moves the nozzle',
      'Tuning tool: a small control panel for the colour range, contour size, camera and serial port makes it easy to adapt to different cookies and lighting',
      'Test runs: a cork disc stood in for a cookie to prove the outline detection, and icing patterns were drawn on a tray to check the extrusion and motion',
    ],
    folder: 'CookieIcing',
    images: ['icing-nozzle.jpg', 'cookie-detection.jpg', 'cookie-mask.jpg', 'frame.jpg', 'platter.jpg', 'rails.jpg'],
  },
  {
    title: 'CNC Lathe Conversion',
    tags: ['Control software', 'Retrofit', 'Machining'],
    description: 'Converted a standard Adendorff lathe into a CNC machine, including the control software.',
    folder: 'Lathe',
    images: ['lathe-overview.jpg', 'stepper-mount.jpg'],
    videos: [{ file: 'lathe-cnc.mp4', poster: 'lathe-cnc-poster.jpg', ratio: 16 / 9 }],
  },
  {
    title: 'Sand Table Controller',
    tags: ['ESP32', 'mDNS provisioning'],
    description: 'An ESP32-based sand table controller with mDNS provisioning for easy network setup.',
  },
  {
    title: 'TagNest: PIT-tag Bird Tracker',
    tags: ['ESP32', 'RFID', 'Data logging', 'Web UI', 'mDNS'],
    description:
      'An ESP32-based tracker that reads the PIT tags of visiting birds and logs each visit. The device hosts its own web interface, so it can be configured and monitored from a phone with no internet connection.',
    points: [
      'Tag reading: an RFID reader with a coil antenna picks up each tag ID as a bird passes, and the antenna number is recorded for readers with more than one antenna',
      'Logging: every event is stored with a timestamp and the temperature, kept accurate by a real-time clock, with files saved to an SD card',
      'Web interface: served by the ESP32 and reached at tagnest.local using mDNS, with a live feed of tag events, SD card file list, clock setting and syncing',
      'Power saving: a night mode that puts the device to sleep between set times',
    ],
    folder: 'TagNest',
    images: ['breadboard.jpg', 'web-interface.jpg'],
  },
  {
    title: 'Desktop CNC Router',
    tags: ['Fusion 360', 'CAD', 'Sheet metal', 'CNC'],
    description: 'An alternative design for a desktop CNC router, built from sheet metal and modelled in Fusion 360. The 3D model above is interactive.',
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
