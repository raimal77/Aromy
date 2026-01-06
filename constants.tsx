
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Bloom',
    price: 185,
    category: 'Signature',
    description: 'A mysterious dance of night-blooming jasmine and rich oud.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    notes: ['Jasmine', 'Oud', 'Saffron']
  },
  {
    id: '2',
    name: 'Soleil Blanc',
    price: 210,
    category: 'Summer',
    description: 'Capture the warmth of a Mediterranean afternoon.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    notes: ['Bergamot', 'Vanilla', 'Sea Salt']
  },
  {
    id: '3',
    name: 'Velvet Rose',
    price: 195,
    category: 'Classic',
    description: 'Opulent Damask rose wrapped in smoky incense.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    notes: ['Rose', 'Clove', 'Amber']
  },
  {
    id: '4',
    name: 'Emerald Forest',
    price: 175,
    category: 'Signature',
    description: 'Deep woodland notes with a crisp finish of pine.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    notes: ['Pine', 'Cedar', 'Moss']
  },
  {
    id: '5',
    name: 'Champagne Blush',
    price: 225,
    category: 'Exclusive',
    description: 'Sparkling citrus notes with a sophisticated white musk base.',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80&w=800',
    notes: ['Mandarin', 'Musk', 'Peony']
  }
];

export const COLLECTIONS = [
  {
    title: 'The Nocturnal Series',
    subtitle: 'Fragrances designed for the elegant night.',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Golden Hour',
    subtitle: 'The warmth of the setting sun in a bottle.',
    image: 'https://images.unsplash.com/photo-1616948055600-8f940d031f24?auto=format&fit=crop&q=80&w=1200'
  }
];
