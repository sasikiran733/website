export interface Education {
  school: string;
  degree: string;
  year: string;
  score: string;
  location?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  location: string;
}

export interface PersonalInfo {
  dob: string;
  nationality: string;
  maritalStatus: string;
  languages: string[];
  hobbies: string[];
}
