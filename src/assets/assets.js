import logo from './logo.svg'
import drlogo from './drlogo.png'
import drimage from './dr.jpg'
import hero from './hero.jpg'
import Pulpitis from './pulpitis.jpg'
import Malocclusion from './Malocclusion.jpeg'
import ToothSensitivity from './Tooth Sensitivity.jpg'
import Periodontitis from './Periodontitis.webp'
import Gingivitis from './Gingivitis.jpg'
import dentalcaries from './dental caries.jpeg'
import ToothExtractions from './Tooth Extractions.jpeg'
import ToothColoredFillings from './Tooth-Colored Fillings.jpeg'
import DentalXrays from './Dental X-rays.jpeg'
import OralHygieneEducation from './Oral Hygiene Education.PNG'
import DentalExaminations  from './Dental Examinations & Consultations.webp'
import ProfessionalTeethCleaning from './Professional Teeth Cleaning.jpeg'



export const assets = {
  logo,
  drlogo,
  drimage,
  hero,
  Pulpitis,
  Malocclusion,
  ToothSensitivity,
  Periodontitis,
  Gingivitis,
  dentalcaries,
  ToothExtractions,
  ToothColoredFillings,
  DentalXrays,
  OralHygieneEducation,
  DentalExaminations,
  ProfessionalTeethCleaning

}


export const diseaseData = [
  {
    id: 1,
    title: "Dental Caries",
    image_url: assets.dentalcaries,
    description: "Toothache, visible holes or pits, sensitivity to sweets"
  },
  {
    id: 2,
    title: "Gingivitis",
    image_url: assets.Gingivitis,
    description: "Red, swollen gums that bleed easily, mild discomfort"
  },
  {
    id: 3,
    title: "Periodontitis",
    image_url: assets.Periodontitis,
    description: "Gum recession, loose teeth, persistent bad breath"
  },
  {
    id: 4,
    title: "Tooth Sensitivity",
    image_url: assets.ToothSensitivity,
    description: "Sharp, sudden pain when consuming hot or cold foods"
  },
  {
    id: 5,
    title: "Malocclusion",
    image_url: assets.Malocclusion,
    description: "Difficulty chewing, speech problems, jaw discomfort"
  },
  {
    id: 6,
    title: "Pulpitis",
    image_url: assets.Pulpitis,
    description: "Severe tooth pain, especially when eating or drinking"
  }
];



export const facilitiesdata = [
  {
    id: 1,
    title: "Dental Examinations & Consultations",
    img: assets.DentalExaminations
  },
  {
    id: 2,
    title: "Professional Teeth Cleaning",
    img: assets.ProfessionalTeethCleaning
  },
  {
    id: 3,
    title: "Dental X-rays",
    img: assets.DentalXrays
  },
  {
    id: 4,
    title: "Oral Hygiene Education",
    img: assets.OralHygieneEducation
  },
  {
    id: 5,
    title: "Tooth Colored Fillings",
    img: assets.ToothColoredFillings
  },
  {
    id: 6,
    title: "Tooth Extractions",
    img: assets.ToothExtractions
  }
];



export const patientReviews = [
  {
    name: 'Priya Sharma',
    location: 'Varanasi, UP',
    avatar: 'https://placehold.co/100x100/E9D5FF/4C1D95?text=PS',
    review: 'The care and attention to detail here are second to none. The staff made me feel comfortable and secure throughout my entire treatment. Highly recommended!',
  },
  {
    name: 'Amit Singh',
    location: 'Lucknow, UP',
    avatar: 'https://placehold.co/100x100/BAE6FD/0C4A6E?text=AS',
    review: 'A truly professional and welcoming environment. The doctor was incredibly knowledgeable and took the time to explain everything clearly. My health has improved significantly.',
  },
  {
    name: 'Sunita Verma',
    location: 'Kanpur, UP',
    avatar: 'https://placehold.co/100x100/FBCFE8/831843?text=SV',
    review: 'From booking the appointment to the final consultation, the experience was seamless. The automatic reminders and friendly staff make all the difference.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Prayagraj, UP',
    avatar: 'https://placehold.co/100x100/D1FAE5/065F46?text=RK',
    review: 'I was nervous about my procedure, but the team here was so reassuring and gentle. The facility is modern and clean. I felt I was in the best hands.',
  },
];








































export const NavbarMenu = [
  {
    id:1,
    title:"Home",
    link: "/"
  },
  {
    id:2,
    title:"About us",
    link: "#"
  },
  {
    id:3,
    title:"Facilities offer",
    link: "#"
  },
  {
    id:4,
    title:"Treatement",
    link: "#"
  },
  {
    id:5,
    title:"Symptoms",
    link: "#"
  },
  {
    id:6,
    title:"Awards",
    link: "#"
  },
  {
    id:7,
    title:"Contact us",
    link: "#"
  },

]



