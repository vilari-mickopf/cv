import {
  NovelicLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Filip Markovic",
  initials: "FM",
  location: "Belgrade, Serbia",
  locationLink: "https://www.google.com/maps/place/Belgrade",
  about:
    "Software Engineer focused on building products with extra attention to detail.",
  summary:
    "As a Software Engineer with almost 7 years of experience, I have successfully taken multiple products from 0 to 1. I have worked on a variety of projects and technologies, including embedded engineering, applicative programming, machine learning, and radar algorithm development. I am always striving to learn new things.",
  avatarUrl: "https://avatars.githubusercontent.com/u/39714069?v=4",
  contact: {
    email: "f12markovic@gmail.com",
    tel: "+381645663661",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vilari-mickopf",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/f12markovic/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "School of Electrical Engineering University of Belgrade",
      degree: "Bachelor's Degree in Electronics",
      start: "2013",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Novelic",
      link: "https://www.novelic.com",
      badges: [],
      title: "Software Developer",
      logo: NovelicLogo,
      start: "Dec 2017",
      end: "/",
      description: "",
    },
  ],
  skills: [
    "Python",
    "Tensorflow/PyTorch",
    "C/C++",
    "Lua",
    "Bash",
    "Linux",
  ],
  projects: [
    {
      title: "Seat occupancy and child presence detection",
      techStack: ["Python", "Tensorflow"],
      description:
        "Converting mmWave signals to heatmaps using radar algorithms and training ML models for detecting seat occupancy and child presence.",
      logo: NovelicLogo,
      link: {
        label: "novelic.com",
        href: "https://www.novelic.com/acam-automotive-in-cabin-monitoring-radar/",
      },
    },
    {
      title: "Keras to C model converter",
      techStack: ["Python", "C firmware"],
      description:
        "Quantizing and converting neural networks from Keras into C (from scratch) for embedded applications.",
      logo: NovelicLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Gesture recognition using mmWave",
      techStack: ["Side Project", "Tensorflow"],
      description:
        "Collecting data from serial port and passing it through neural network for recognizing and classifying one of nine different gestures.",
      logo: GitHubIcon,
      link: {
        label: "github.com",
        href: "https://github.com/vilari-mickopf/mmwave-gesture-recognition/",
      },
    },
    {
      title: "Localization and classification",
      techStack: ["Python", "PyTorch"],
      description:
        "Implementing ramp-cnn architecture for localization and classification of targets on radar heatmaps.",
      logo: NovelicLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Point cloud annotator",
      techStack: ["C++", "Qt", "PCL", "VTK"],
      description:
        "Developing a QT-based application for loading and annotating lidar data, utilizing PCL for processing, filtering, and segmenting cloud data, and employing VTK for representing cloud data and manipulating annotations.",
      logo: NovelicLogo,
      link: {
        label: "novelic.com",
        href: "https://www.novelic.com/wp-content/uploads/2021/09/video-za-sajt-1.mp4",
      },
    },
    {
      title: "Real-time data acquisition",
      techStack: ["C firmware", "FreeRTOS", "LWIP"],
      description:
        "Setting up a FreeRTOS/LWIP environment on SAMA5D2 for real-time data acquisition via SPI and forwarding it to Ethernet, implementing gPTP protocol support with an offset of <1 μs and QT application for debugging Syslog messages.",
      logo: NovelicLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "SafeTLib",
      techStack: ["C firmware", "Autosar", "Aurix"],
      description:
        "Developing Safetlib on Aurix TC23 within the AUTOSAR concept, implementing runtime tests with internal and external watchdogs, and separating user and system memory spaces to create safe and unsafe contexts using the Memory Protection Unit (MPU).",
      logo: NovelicLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Camera testing",
      techStack: ["C++", "ROS", "OpenCV"],
      description:
        "Collecting images from UDP and sending them via ROS channels for testing, processing received images for camera features and basic object detection, implementing tests with OpenCV.",
      logo: NovelicLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Glam",
      techStack: ["C", "GTK"],
      description:
        "Adding additional features to Analog Devices' IIO Oscilloscope for the AD-FMCOMMxx board, using the GTK framework for GUI development, and designing windows and widgets in Glade Interface Designer.",
      logo: NovelicLogo,
      link: {
        label: "novelic.com",
        href: "https://www.novelic.com/rnd-activities-and-programs/",
      },
    },
  ],
} as const;
