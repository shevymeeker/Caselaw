// Sample Kentucky Search & Seizure Cases
// Note: Replace with actual case data from Kentucky courts

export const caseSeed = [
  {
    id: 1,
    name: 'Commonwealth v. Smith',
    citation: '123 Ky. 456 (2023)',
    year: 2023,
    courtLevel: 'supreme',
    summary:
      'Vehicle search conducted during traffic stop upheld based on probable cause from odor of marijuana.',
    facts: [
      'Officer stopped vehicle for expired registration',
      'Officer detected strong odor of marijuana from vehicle',
      'Search of vehicle revealed controlled substances',
      'Defendant moved to suppress evidence',
    ],
    holding:
      'The Court held that the odor of marijuana provided probable cause for the warrantless search of the vehicle under the automobile exception to the Fourth Amendment.',
    significance:
      'Clarifies that despite marijuana decriminalization trends, odor still constitutes probable cause in Kentucky for vehicle searches.',
    categories: ['vehicle', 'warrant'],
    url: 'http://docjt.ky.gov',
  },
  {
    id: 2,
    name: 'Commonwealth v. Johnson',
    citation: '456 Ky. App. 789 (2022)',
    year: 2022,
    courtLevel: 'appeals',
    summary:
      'Consent to search must be voluntary and knowing; coercion invalidates consent.',
    facts: [
      'Officers approached defendant at bus station',
      'Defendant allegedly consented to search of luggage',
      'Officers had blocked defendant\'s path to exit',
      'Defendant claims felt unable to refuse',
    ],
    holding:
      'Consent to search was not voluntary where officers created coercive environment preventing defendant from leaving.',
    significance:
      'Important precedent on voluntariness of consent in police encounters.',
    categories: ['consent'],
    url: 'http://docjt.ky.gov',
  },
  {
    id: 3,
    name: 'Commonwealth v. Williams',
    citation: '789 Ky. 123 (2023)',
    year: 2023,
    courtLevel: 'supreme',
    summary:
      'Plain view doctrine applies when contraband is immediately apparent to officer lawfully present.',
    facts: [
      'Officer responded to noise complaint at apartment',
      'From doorway, officer observed drugs in plain view',
      'Officer entered and seized drugs without warrant',
      'Defendant challenged warrantless entry and seizure',
    ],
    holding:
      'Evidence suppressed because officer lacked authority to enter residence without warrant despite plain view of contraband.',
    significance:
      'Reinforces that plain view alone does not justify warrantless entry into home.',
    categories: ['plain-view', 'warrant'],
    url: 'http://docjt.ky.gov',
  },
  {
    id: 4,
    name: 'Commonwealth v. Davis',
    citation: '234 Ky. App. 567 (2021)',
    year: 2021,
    courtLevel: 'appeals',
    summary:
      'Exigent circumstances justified warrantless entry to prevent destruction of evidence.',
    facts: [
      'Officers at door to execute arrest warrant',
      'Heard sounds of toilet flushing and rapid movement',
      'Officers forced entry citing exigent circumstances',
      'Found defendant destroying evidence',
    ],
    holding:
      'Warrantless entry justified by exigent circumstances where officers had probable cause and reasonable belief evidence was being destroyed.',
    significance:
      'Defines scope of exigent circumstances exception in Kentucky.',
    categories: ['exigent', 'warrant'],
    url: 'http://docjt.ky.gov',
  },
  {
    id: 5,
    name: 'Commonwealth v. Brown',
    citation: '345 Ky. 678 (2022)',
    year: 2022,
    courtLevel: 'supreme',
    summary:
      'Search incident to arrest must be contemporaneous with arrest and limited to area within immediate control.',
    facts: [
      'Defendant arrested outside vehicle',
      'After handcuffing and securing defendant',
      'Officers searched vehicle 15 minutes later',
      'Found weapon under passenger seat',
    ],
    holding:
      'Search not justified as incident to arrest where defendant already secured and no reasonable belief of danger or evidence destruction.',
    significance:
      'Limits scope of search incident to arrest doctrine for vehicles.',
    categories: ['arrest', 'vehicle'],
    url: 'http://docjt.ky.gov',
  },
  {
    id: 6,
    name: 'Commonwealth v. Martinez',
    citation: '567 Ky. App. 890 (2020)',
    year: 2020,
    courtLevel: 'appeals',
    summary:
      'Warrantless protective sweep of residence must be justified by reasonable belief of danger.',
    facts: [
      'Officers entered home to arrest suspect',
      'Conducted sweep of entire house',
      'Found contraband in closed bedroom closet',
      'Officers claimed safety justification',
    ],
    holding:
      'Protective sweep exceeded constitutional limits where no articulable facts supported belief that dangerous persons were present.',
    significance:
      'Clarifies limitations on protective sweeps during arrests in homes.',
    categories: ['arrest', 'warrant'],
    url: 'http://docjt.ky.gov',
  },
]
