export interface ProjectCardProps {
  title: string;
  description: string;
  rawSrc: string;
  editedSrc: string;
  type: 'video' | 'audio-video';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}
