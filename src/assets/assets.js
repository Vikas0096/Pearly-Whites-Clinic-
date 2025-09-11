import logo from './logo.svg'
import drlogo from './drlogo.png'
import hero from './hero.jpg'
import Pulpitis from './Pulpitis.jpg'
import Malocclusion from './Malocclusion.jpeg'
import ToothSensitivity from './Tooth Sensitivity.jpg'
import Periodontitis from './Periodontitis.webp'
import Gingivitis from './Gingivitis.jpg'
import dentalcaries from './dental caries.jpeg'

export const assets = {
  logo,
  drlogo,
  hero,
  Pulpitis,
  Malocclusion,
  ToothSensitivity,
  Periodontitis,
  Gingivitis,
  dentalcaries
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
      "id": 1,
      "title": "Dental Examinations & Consultations",
      "img": "images/dental_examinations.jpg"
    },
    {
      "id": 2,
      "title": "Professional Teeth Cleaning",
      "img": "images/teeth_cleaning.jpg"
    },
    {
      "id": 3,
      "title": "Dental X-rays",
      "img": "images/dental_xrays.jpg"
    },
    {
      "id": 4,
      "title": "Oral Hygiene Education",
      "img": "images/oral_hygiene.jpg"
    },
    {
      "id": 5,
      "title": "Tooth-Colored Fillings",
      "img": "images/tooth_colored_fillings.jpg"
    },
    {
      "id": 6,
      "title": "Tooth Extractions",
      "img": "images/tooth_extractions.jpg"
    }
  ]






































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



