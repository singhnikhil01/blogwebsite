import { FaUniversity, FaSchool } from "react-icons/fa";

export const educationData = [
  {
    year: "2019 - 2023",
    title: "Bachelor of Technology (CSE)",
    institution: "Amrita Vishwa Vidyapeetham, Kerala",
    icon: <FaUniversity className="w-6 h-6 text-orange-500" />,
    highlights: [
      "CGPA: 8.2/10",
      "Specialization in AI & Machine Learning",
    ],
  },
  {
    year: "2017 - 2019",
    title: "Higher Secondary Education",
    institution: "Delhi Public School, New Delhi",
    icon: <FaSchool className="w-6 h-6 text-orange-500" />,
    highlights: [
      "Scored 95% in CBSE Board Exams",
      "Head of Science Club",
    ],
  },
  {
    year: "2017 - 2019",
    title: "Higher Secondary Education",
    institution: "Delhi Public School, New Delhi",
    icon: <FaSchool className="w-6 h-6 text-orange-500" />,
    highlights: [
      "Scored 95% in CBSE Board Exams",
      "Head of Science Club",
    ],
  },
];


export const projectsData = [
  {
    id: 1,
    title: 'AI-Powered Content Moderator',
    type: 'ML Engineering',
    image: '/projects/ai-moderation.jpg',
    highlights: [
      'Real-time image analysis pipeline',
      'Custom CNN architecture',
      'Scalable Kubernetes deployment'
    ],
    github: '#',
    demo: '#',
    details: {
      overview: 'Developed a content moderation system handling 10k+ requests/minute...',
      challenges: ['Real-time processing demands', 'Model interpretability needs'],
      architecture: 'TensorFlow → FastAPI → Redis → React',
      stack: ['Python', 'PyTorch', 'Docker', 'AWS'],
      images: [
        '/projects/moderation-1.jpg',
        '/projects/moderation-2.jpg'
      ]
    }
  },
  {
    id: 2,
    title: 'Serverless E-Commerce Platform',
    type: 'Full Stack Development',
    image: '/projects/ecommerce.jpg',
    highlights: [
      'Zero-downtime deployments',
      'JWT-based auth system',
      'Payment gateway integration'
    ],
    github: '#',
    demo: '#',
    details: {
      overview: 'Built cloud-native platform handling $1M+ monthly transactions...',
      challenges: ['State management in serverless', 'Cold start optimization'],
      architecture: 'React → Lambda → DynamoDB → Stripe',
      stack: ['TypeScript', 'Node.js', 'Terraform', 'Redis'],
      images: [
        '/projects/ecommerce-1.jpg',
        '/projects/ecommerce-2.jpg'
      ]
    }
  },
  {
    id: 3,
    title: 'Serverless E-Commerce Platform',
    type: 'Full Stack Development',
    image: '/projects/ecommerce.jpg',
    highlights: [
      'Zero-downtime deployments',
      'JWT-based auth system',
      'Payment gateway integration'
    ],
    github: '#',
    demo: '#',
    details: {
      overview: 'Built cloud-native platform handling $1M+ monthly transactions...',
      challenges: ['State management in serverless', 'Cold start optimization'],
      architecture: 'React → Lambda → DynamoDB → Stripe',
      stack: ['TypeScript', 'Node.js', 'Terraform', 'Redis'],
      images: [
        '/projects/ecommerce-1.jpg',
        '/projects/ecommerce-2.jpg'
      ]
    }
  }
];