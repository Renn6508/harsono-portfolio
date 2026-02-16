// --- DATA PROJECTS ---
export const projectsData = [
  {
    id: 1,
    title: "Enterprise Network Topology Design",
    category: "Cisco Packet Tracer",
    description: "Perancangan arsitektur jaringan skala enterprise menggunakan VLAN Segmentation, VTP, dan Inter-VLAN Routing untuk optimalisasi trafik data antar divisi.",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1000&auto=format&fit=crop", 
    techStack: ["Cisco IOS", "OSPF", "ACL Security"],
    link: "#",
  },
  {
    id: 2,
    title: "Hotspot Management System",
    category: "Mikrotik RouterOS",
    description: "Deployment sistem manajemen bandwidth (QoS) dan captive portal terintegrasi User Manager untuk mengontrol akses internet di lingkungan sekolah.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=1000&auto=format&fit=crop", 
    techStack: ["Mikrotik", "Radius Server", "Walled Garden"],
    link: "#",
  },
  {
    id: 3,
    title: "Debian Dedicated Web Server",
    category: "Linux Administration",
    description: "Konfigurasi server Linux Debian sebagai Web Server (Apache), DNS Server (Bind9), dan Mail Server untuk kebutuhan hosting lokal intranet.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Debian 11", "Bash CLI", "Apache2"],
    link: "#",
  }
];

// --- DATA SKILLS ---
export const skillsData = {
  networking: [
    "OSI Layer & TCP/IP",
    "Subnetting / VLSM",
    "Mikrotik RouterOS",
    "Cisco Switching & Routing",
    "Fiber Optic Splicing",
    "Wireless Point-to-Point"
  ],
  tools: [
    "Winbox",
    "Cisco Packet Tracer",
    "GNS3 / EVE-NG",
    "VirtualBox",
    "Wireshark",
    "Linux Terminal"
  ],
};

// --- DATA KEUNGGULAN (BARU) ---
export const strengthsData = [
  {
    id: 1,
    title: "Analytical Thinking",
    desc: "Mampu menganalisis masalah jaringan (troubleshooting) secara logis dari Layer 1 hingga Layer 7 untuk menemukan solusi cepat.",
  },
  {
    id: 2,
    title: "Detail Oriented",
    desc: "Teliti dalam konfigurasi IP Address, manajemen kabel (cabling management), dan keamanan firewall untuk meminimalisir error.",
  },
  {
    id: 3,
    title: "Fast Learner",
    desc: "Cepat beradaptasi dengan teknologi baru, baik itu update firmware perangkat jaringan maupun distro Linux terbaru.",
  },
  {
    id: 4,
    title: "Team Collaboration",
    desc: "Terbiasa bekerja dalam tim saat instalasi infrastruktur fisik maupun manajemen proyek jaringan virtual.",
  }
];