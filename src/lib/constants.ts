export const BOOKING_URL = 'https://calendly.com/kaya-chakmak/30min'

export const NAV_LINKS = [
  { key: 'solution', href: '#solution' },
  { key: 'industries', href: '#industries' },
  { key: 'automation', href: '#automation' },
  { key: 'howItWorks', href: '#how-it-works' },
] as const

export const STATS = [
  { key: 'simultaneous', value: 450, suffix: '' },
  { key: 'hires', value: 0, suffix: '' },
  { key: 'availability', value: 24, suffix: '/7' },
  { key: 'custom', value: 100, suffix: '%' },
] as const

export const INDUSTRIES = [
  'warehouses',
  'healthcare',
  'realEstate',
  'homeServices',
  'legal',
  'insurance',
] as const

export const AUTOMATION_EXAMPLES = [
  'dataEntry',
  'orderManagement',
  'crmWorkflows',
  'reporting',
] as const

export const STEPS = ['step1', 'step2', 'step3', 'step4'] as const
