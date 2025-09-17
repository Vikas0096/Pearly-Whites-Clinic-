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
import OralHygieneEducation from './Oral Hygiene Education.png'
import DentalExaminations  from './Dental Examinations & Consultations.webp'
import ProfessionalTeethCleaning from './Professional Teeth Cleaning.jpeg'
import award1 from './award1.jpg'
import award2 from './award2.jpg'
import award3 from './award3.jpg'
import award4 from './award4.jpg'
import award5 from './award5.jpg'
import award6 from './award6.webp'
import hospital from './hospital.png'
import map from './map.png'


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
  ProfessionalTeethCleaning,
  award1,
  award2,
  award3,
  award4,
  award5,
  award6,
  hospital,
  map
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
export const treatmentData = [
  {
    id: 1,
    title: "Dental Caries",
    image_url: assets.dentalcaries,
    description: "Dental caries, or cavities, are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. This decay is caused by the breakdown of enamel due to acids produced by bacteria feeding on sugar in the mouth, leading to progressive destruction of the tooth structure.",
    symptom: "Toothache, visible pits or holes, sensitivity to sweets, cold or hot temperature changes, pain when biting, discoloration or staining on the tooth surface, bad breath, and occasional swelling around the affected tooth.",
    diagnosis: "Diagnosed through thorough visual examination, dental probing to detect soft spots, bitewing and periapical X-rays to assess the extent and depth of decay, and sometimes laser fluorescence devices to detect early decay.",
    treatment: "Fluoride treatments to remineralize early decay, dental fillings using composite or amalgam materials, crowns to restore severely damaged teeth, root canals for infected pulp, and tooth extraction in cases of extensive damage or infection."
  },
  {
    id: 2,
    title: "Gingivitis",
    image_url: assets.Gingivitis,
    description: "Gingivitis is a common and mild form of gum disease (periodontal disease) that causes irritation, redness, swelling, and inflammation of the gums due to plaque buildup along the gumline. If untreated, it can progress to more serious periodontal conditions.",
    symptom: "Red, swollen, tender gums that bleed easily during brushing or flossing, persistent bad breath (halitosis), gum recession, and a soft, puffy texture of the gums around the teeth.",
    diagnosis: "Diagnosed during a dental exam by visual inspection of gum color and texture, probing to measure pocket depth between gums and teeth, assessing bleeding on probing, and evaluating plaque and tartar accumulation.",
    treatment: "Improved oral hygiene practices including brushing and flossing, professional dental cleaning (scaling and polishing) to remove plaque and tartar, use of antibacterial mouthwash, and in some cases, prescription antibiotics or anti-inflammatory medications."
  },
  {
    id: 3,
    title: "Periodontitis",
    image_url: assets.Periodontitis,
    description: "Periodontitis is a severe gum infection that damages the soft tissue and destroys the bone that supports your teeth. It results from untreated gingivitis and leads to progressive gum detachment and tooth loss if not properly managed.",
    symptom: "Receding gums exposing roots, persistent bad breath, loose or shifting teeth, formation of deep gum pockets, swollen and bleeding gums, pus discharge from gum pockets, and discomfort while chewing.",
    diagnosis: "Diagnosed via clinical examination including probing depth measurements, evaluation of gum attachment levels, bleeding on probing, and dental X-rays to detect bone loss around teeth, along with assessment of overall oral hygiene status.",
    treatment: "Non-surgical treatments like scaling and root planing (deep cleaning), adjunctive use of systemic or local antibiotics, and surgical interventions such as flap surgery, bone grafts, or guided tissue regeneration to restore lost bone and gum tissue in advanced cases."
  },
  {
    id: 4,
    title: "Tooth Sensitivity",
    image_url: assets.ToothSensitivity,
    description: "Tooth sensitivity is discomfort or sharp pain in the teeth triggered by specific stimuli, such as exposure to hot or cold temperatures, acidic or sweet foods, or even brushing. It results from exposed dentin or enamel erosion.",
    symptom: "Sharp, sudden, and brief pain or discomfort when consuming hot, cold, sweet, sour, or acidic foods and drinks, or during toothbrushing. Sensitivity may also occur with cold air exposure and sometimes persistent mild ache.",
    diagnosis: "Diagnosed through patient history taking, clinical dental examination, identifying exposed dentin, ruling out other conditions like cavities, cracked teeth, or gum recession, and sometimes using sensitivity tests such as thermal or tactile stimulation.",
    treatment: "Use of desensitizing toothpaste containing potassium nitrate or strontium chloride, professional fluoride varnish applications, dental bonding to cover exposed root surfaces, use of sealants, gum grafts for root coverage, and avoiding acidic foods and aggressive brushing."
  },
  {
    id: 5,
    title: "Malocclusion",
    image_url: assets.Malocclusion,
    description: "Malocclusion is the misalignment of teeth and jaws, which can negatively affect chewing, speech, oral hygiene, and overall oral health. It includes overbite, underbite, crossbite, crowding, and spacing issues, often due to genetic or developmental factors.",
    symptom: "Difficulty chewing or biting, jaw pain or discomfort, speech problems like lisping, visible misalignment or crooked teeth, frequent biting of inner cheeks or tongue, and sometimes temporomandibular joint (TMJ) disorders.",
    diagnosis: "Diagnosed through clinical examination assessing teeth alignment, bite relationship, jaw movement, dental X-rays, cephalometric analysis, and dental molds to analyze bite and occlusal relationships precisely.",
    treatment: "Orthodontic treatments including braces, clear aligners (Invisalign), tooth reshaping (odontoplasty), extraction of overcrowded teeth, and in severe cases, orthognathic (jaw) surgery to correct skeletal discrepancies."
  },
  {
    id: 6,
    title: "Pulpitis",
    image_url: assets.Pulpitis,
    description: "Pulpitis is inflammation of the dental pulp tissue inside the tooth, often caused by deep tooth decay, trauma, or repeated dental procedures. It can be reversible or irreversible, impacting the pulp's health and requiring appropriate treatment.",
    symptom: "Severe tooth pain, often spontaneous or triggered by hot or cold stimuli, prolonged sensitivity after stimulus removal, throbbing pain, swelling of surrounding gum tissues, and sometimes fever if infection spreads.",
    diagnosis: "Diagnosed through clinical tests including thermal (cold and heat) testing, percussion tests to check for tenderness, electric pulp testing, and dental X-rays to evaluate pulp chamber and periapical tissues.",
    treatment: "Reversible pulpitis may be managed with fillings and dental hygiene to remove irritants, while irreversible pulpitis usually requires root canal therapy to remove infected pulp or, if non-restorable, tooth extraction."
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

export const awards = [ {
    id: 1,
    location: "New York",
    img: award1
  },
  {
    id: 2,
    location: "Paris",
    img: award2
  },
  {
    id: 3,
    location: "Tokyo",
    img: award3
  },
  {
    id: 4,
    location: "London",
    img: award4
  },
  {
    id: 5,
    location: "Sydney",
    img: award5
  },
  {
    id: 6,
    location: "Dubai",
    img: award6
  }
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



