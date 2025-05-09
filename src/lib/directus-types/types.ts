import type {DirectusFile} from "@directus/sdk";

export type BenefitIndividual = {
  id: number;
  translations: BenefitIndividualTranslations[];
};

export type BenefitIndividualTranslations = {
  benefit_individual_id?: number | BenefitIndividual;
  cta: string;
  cta_bulletpoints?: unknown;
  cta_message?: string;
  cta_title?: string;
  faq: string;
  faq_questions?: unknown;
  faq_title?: string;
  id: number;
  languages_code?: string | Languages;
  offer: string;
  offer_bulletpoints?: unknown;
  offer_message?: string;
  offer_title?: string;
  challenge: string;
  challenge_bulletpoints?: {
    text: string;
    icon: string;
  }[];
  challenge_button?: string;
  challenge_message?: string;
  challenge_title?: string;
  challenge_title_rotator?: string[];
  challenge_heading?: string[];
};

export type Customers = {
  id: number;
  logo: string | DirectusFile;
  name: string;
  sort?: number;
  status: string;
  url?: string;
};

export type DirectusAccess = {
  id: string;
  policy: string | DirectusPolicies;
  role?: string | DirectusRoles;
  sort?: number;
  user?: string | DirectusUsers;
};

export type DirectusActivity = {
  action: string;
  collection: string;
  comment?: string;
  id: number;
  ip?: string;
  item: string;
  origin?: string;
  revisions: DirectusRevisions[];
  timestamp: string;
  user?: string | DirectusUsers;
  user_agent?: string;
};

export type DirectusCollections = {
  accountability?: string;
  archive_app_filter: boolean;
  archive_field?: string;
  archive_value?: string;
  collapse: string;
  collection: string;
  color?: string;
  display_template?: string;
  group?: string | DirectusCollections;
  hidden: boolean;
  icon?: string;
  item_duplication_fields?: unknown;
  note?: string;
  preview_url?: string;
  singleton: boolean;
  sort?: number;
  sort_field?: string;
  translations?: unknown;
  unarchive_value?: string;
  versioning: boolean;
};

export type DirectusDashboards = {
  color?: string;
  date_created?: string;
  icon: string;
  id: string;
  name: string;
  note?: string;
  panels: DirectusPanels[];
  user_created?: string | DirectusUsers;
};

export type DirectusExtensions = {
  bundle?: string;
  enabled: boolean;
  folder: string;
  id: string;
  source: string;
};

export type DirectusFields = {
  collection: string | DirectusCollections;
  conditions?: unknown;
  display?: string;
  display_options?: unknown;
  field: string;
  group?: string | DirectusFields;
  hidden: boolean;
  id: number;
  interface?: string;
  note?: string;
  options?: unknown;
  readonly: boolean;
  required?: boolean;
  sort?: number;
  special?: unknown;
  translations?: unknown;
  validation?: unknown;
  validation_message?: string;
  width?: string;
};

export type DirectusFlows = {
  accountability?: string;
  color?: string;
  date_created?: string;
  description?: string;
  icon?: string;
  id: string;
  name: string;
  operation?: string | DirectusOperations;
  operations: DirectusOperations[];
  options?: unknown;
  status: string;
  trigger?: string;
  user_created?: string | DirectusUsers;
};

export type DirectusFolders = {
  id: string;
  name: string;
  parent?: string | DirectusFolders;
};

export type DirectusMigrations = {
  name: string;
  timestamp?: string;
  version: string;
};

export type DirectusNotifications = {
  collection?: string;
  id: number;
  item?: string;
  message?: string;
  recipient: string | DirectusUsers;
  sender?: string | DirectusUsers;
  status?: string;
  subject: string;
  timestamp?: string;
};

export type DirectusOperations = {
  date_created?: string;
  flow: string | DirectusFlows;
  id: string;
  key: string;
  name?: string;
  options?: unknown;
  position_x: number;
  position_y: number;
  reject?: string | DirectusOperations;
  resolve?: string | DirectusOperations;
  type: string;
  user_created?: string | DirectusUsers;
};

export type DirectusPanels = {
  color?: string;
  dashboard: string | DirectusDashboards;
  date_created?: string;
  height: number;
  icon?: string;
  id: string;
  name?: string;
  note?: string;
  options?: unknown;
  position_x: number;
  position_y: number;
  show_header: boolean;
  type: string;
  user_created?: string | DirectusUsers;
  width: number;
};

export type DirectusPermissions = {
  action: string;
  collection: string;
  fields?: unknown;
  id: number;
  permissions?: unknown;
  policy: string | DirectusPolicies;
  presets?: unknown;
  validation?: unknown;
};

export type DirectusPolicies = {
  admin_access: boolean;
  app_access: boolean;
  description?: string;
  enforce_tfa: boolean;
  icon: string;
  id: string;
  ip_access?: unknown;
  name: string;
  permissions: DirectusPermissions[];
  roles: DirectusAccess[];
  users: DirectusAccess[];
};

export type DirectusPresets = {
  bookmark?: string;
  collection?: string;
  color?: string;
  filter?: unknown;
  icon?: string;
  id: number;
  layout?: string;
  layout_options?: unknown;
  layout_query?: unknown;
  refresh_interval?: number;
  role?: string | DirectusRoles;
  search?: string;
  user?: string | DirectusUsers;
};

export type DirectusRelations = {
  id: number;
  junction_field?: string;
  many_collection: string;
  many_field: string;
  one_allowed_collections?: unknown;
  one_collection?: string;
  one_collection_field?: string;
  one_deselect_action: string;
  one_field?: string;
  sort_field?: string;
};

export type DirectusRevisions = {
  activity: number | DirectusActivity;
  collection: string;
  data?: unknown;
  delta?: unknown;
  id: number;
  item: string;
  parent?: number | DirectusRevisions;
  version?: string | DirectusVersions;
};

export type DirectusRoles = {
  children: DirectusRoles[];
  description?: string;
  icon: string;
  id: string;
  name: string;
  parent?: string | DirectusRoles;
  policies: DirectusAccess[];
  users: DirectusUsers[];
  users_group: string;
};

export type DirectusSessions = {
  expires: string;
  ip?: string;
  next_token?: string;
  origin?: string;
  share?: string | DirectusShares;
  token: string;
  user?: string | DirectusUsers;
  user_agent?: string;
};

export type DirectusSettings = {
  auth_login_attempts?: number;
  auth_password_policy?: string;
  basemaps?: unknown;
  custom_aspect_ratios?: unknown;
  custom_css?: string;
  default_appearance: string;
  default_language: string;
  default_theme_dark?: string;
  default_theme_light?: string;
  id: number;
  mapbox_key?: string;
  module_bar?: unknown;
  project_color: string;
  project_descriptor?: string;
  project_logo?: string | DirectusFile;
  project_name: string;
  project_url?: string;
  public_background?: string | DirectusFile;
  public_favicon?: string | DirectusFile;
  public_foreground?: string | DirectusFile;
  public_note?: string;
  public_registration: boolean;
  public_registration_email_filter?: unknown;
  public_registration_role?: string | DirectusRoles;
  public_registration_verify_email: boolean;
  report_bug_url?: string;
  report_error_url?: string;
  report_feature_url?: string;
  storage_asset_presets?: unknown;
  storage_asset_transform?: string;
  storage_default_folder?: string | DirectusFolders;
  theme_dark_overrides?: unknown;
  theme_light_overrides?: unknown;
  theming_group: string;
};

export type DirectusShares = {
  collection: string | DirectusCollections;
  date_created?: string;
  date_end?: string;
  date_start?: string;
  id: string;
  item: string;
  max_uses?: number;
  name?: string;
  password?: string;
  role?: string | DirectusRoles;
  times_used?: number;
  user_created?: string | DirectusUsers;
};

export type DirectusTranslations = {
  id: string;
  key: string;
  language: string;
  value: string;
};

export type DirectusUsers = {
  appearance?: string;
  auth_data?: unknown;
  avatar?: string | DirectusFile;
  description?: string;
  email?: string;
  email_notifications?: boolean;
  external_identifier?: string;
  first_name?: string;
  id: string;
  language?: string;
  last_access?: string;
  last_name?: string;
  last_page?: string;
  location?: string;
  password?: string;
  policies: DirectusAccess[];
  provider: string;
  role?: string | DirectusRoles;
  status: string;
  tags?: unknown;
  tfa_secret?: string;
  theme_dark?: string;
  theme_dark_overrides?: unknown;
  theme_light?: string;
  theme_light_overrides?: unknown;
  title?: string;
  token?: string;
};

export type DirectusVersions = {
  collection: string | DirectusCollections;
  date_created?: string;
  date_updated?: string;
  hash?: string;
  id: string;
  item: string;
  key: string;
  name?: string;
  user_created?: string | DirectusUsers;
  user_updated?: string | DirectusUsers;
};

export type DirectusWebhooks = {
  actions: unknown;
  collections: unknown;
  data: boolean;
  headers?: unknown;
  id: number;
  method: string;
  migrated_flow?: string | DirectusFlows;
  name: string;
  status: string;
  url: string;
  was_active_before_deprecation: boolean;
};

export type Examples = {
  feature_image?: string | DirectusFile;
  hero_image?: string | DirectusFile;
  id: number;
  references: ExamplesReferences[];
  slug: string;
  sort?: number;
  status: string;
  translations: ExamplesTranslations[];
};

export type ExamplesReferences = {
  examples_id?: number | Examples;
  id: number;
  references_id?: number | References;
};

export type ExamplesTranslations = {
  examples_id?: number | Examples;
  feature: string;
  feature_bulletpoints?: unknown;
  feature_message?: string;
  feature_title?: string;
  hero: string;
  hero_message?: string;
  hero_title?: string;
  id: number;
  languages_code?: string | Languages;
  reference: string;
  reference_message?: string;
  reference_title?: string;
};

export type Languages = {
  code: string;
  direction?: string;
  name?: string;
};

export type PageHome = {
  id: number;
  translations: PageHomeTranslations[];
};

export type PageHomeTranslations = {
  company_title?: string;
  founder: string;
  founder_text?: string;
  founder_title?: string;
  hero: string;
  hero_message?: string;
  hero_title?: string;
  id: number;
  languages_code?: string | Languages;
  page_home_id?: number | PageHome;
  reference: string;
  reference_subtitle?: string;
  reference_teaser?: string;
  reference_title?: string;
  service: string;
  service_subtitle?: string;
  service_teaser?: string;
  service_title?: string;
};

export type PageReference = {
  id: number;
  translations: PageReferenceTranslations[];
};

export type PageReferenceTranslations = {
  hero: string;
  hero_message?: string;
  hero_title?: string;
  id: number;
  languages_code?: string | Languages;
  page_reference_id?: number | PageReference;
  reference: string;
  reference_message?: string;
  reference_title?: string;
  techstack_title?: string;
};

export type PageService = {
  id: number;
  section: PageServiceSection[];
  translations: PageServiceTranslations[];
};

export type PageServiceSection = {
  id: number;
  image?: string | DirectusFile;
  page_service_id?: number | PageService;
  slug?: string;
  translations: PageServiceSectionTranslations[];
};

export type PageServiceSectionTranslations = {
  bulletpoints?: unknown;
  id: number;
  languages_code?: string | Languages;
  page_service_section_id?: number | PageServiceSection;
  text?: string;
  title?: string;
};

export type PageServiceTranslations = {
  example: string;
  example_message?: string;
  example_title?: string;
  hero: string;
  hero_message?: string;
  hero_title?: string;
  id: number;
  languages_code?: string | Languages;
  page_service_id?: number | PageService;
};

export type Posts = {
  date_created?: string | null;
  date_updated?: string | null;
  id: number;
  status: string;
  teaser?: (string | DirectusFile) | null;
  translations: any[] & PostsTranslations[];
};

export type PostsTranslations = {
  content?: string | null;
  id: number;
  intro?: string | null;
  languages_code?: (string & Languages) | null;
  posts_id?: (number & Posts) | null;
  slug: string;
  title: string;
};

export type References = {
  customer: number | Customers;
  id: number;
  review_avatar?: string | DirectusFile;
  review_biography?: string;
  screens: ReferencesFiles[];
  slug: string;
  sort?: number;
  status: string;
  teaser?: string | DirectusFile;
  techstacks: ReferencesTechstacks[];
  translations: ReferencesTranslations[];
};

export type ReferencesFiles = {
  directus_files_id?: string | DirectusFile;
  id: number;
  references_id?: number | References;
};

export type ReferencesTechstacks = {
  id: number;
  references_id?: References;
  techstacks_id?: Techstacks;
};

export type ReferencesTranslations = {
  achievements?: {
    text: string;
    icon: string;
  }[];
  background?: string;
  id: number;
  intro?: string;
  languages_code?: string | Languages;
  references_id?: number | References;
  responsibilities?: {
    text: string;
    outline: string;
  }[];
  review_summary?: string;
  title: string;
};

export type Techstacks = {
  color?: string;
  id: number;
  logo?: string;
  name: string;
  textColor: string;
  url?: string;
};

export type Testimonials = {
  avatar?: string | DirectusFile;
  customer?: number | Customers;
  id: number;
  name: string;
  position: string;
  sort?: number;
  status: string;
  translations: TestimonialsTranslations[];
};

export type TestimonialsTranslations = {
  id: number;
  languages_code?: string | Languages;
  message?: string;
  testimonials_id?: number | Testimonials;
};

export type CustomDirectusTypes = {
  benefit_individual: BenefitIndividual;
  benefit_individual_translations: BenefitIndividualTranslations[];
  customers: Customers[];
  directus_access: DirectusAccess[];
  directus_activity: DirectusActivity[];
  directus_collections: DirectusCollections[];
  directus_dashboards: DirectusDashboards[];
  directus_extensions: DirectusExtensions[];
  directus_fields: DirectusFields[];
  directus_files: DirectusFile[];
  directus_flows: DirectusFlows[];
  directus_folders: DirectusFolders[];
  directus_migrations: DirectusMigrations[];
  directus_notifications: DirectusNotifications[];
  directus_operations: DirectusOperations[];
  directus_panels: DirectusPanels[];
  directus_permissions: DirectusPermissions[];
  directus_policies: DirectusPolicies[];
  directus_presets: DirectusPresets[];
  directus_relations: DirectusRelations[];
  directus_revisions: DirectusRevisions[];
  directus_roles: DirectusRoles[];
  directus_sessions: DirectusSessions[];
  directus_settings: DirectusSettings;
  directus_shares: DirectusShares[];
  directus_translations: DirectusTranslations[];
  directus_users: DirectusUsers[];
  directus_versions: DirectusVersions[];
  directus_webhooks: DirectusWebhooks[];
  examples: Examples[];
  examples_references: ExamplesReferences[];
  examples_translations: ExamplesTranslations[];
  languages: Languages[];
  page_home: PageHome;
  page_home_translations: PageHomeTranslations[];
  page_reference: PageReference;
  page_reference_translations: PageReferenceTranslations[];
  page_service: PageService;
  page_service_section: PageServiceSection[];
  page_service_section_translations: PageServiceSectionTranslations[];
  page_service_translations: PageServiceTranslations[];
  posts: Posts[];
  posts_translations: PostsTranslations[];
  references: References[];
  references_files: ReferencesFiles[];
  references_techstacks: ReferencesTechstacks[];
  references_translations: ReferencesTranslations[];
  techstacks: Techstacks[];
  testimonials: Testimonials[];
  testimonials_translations: TestimonialsTranslations[];
  page_offer: PageOffer;
  page_offer_translations: PageOfferTranslations[];
};

export type PageOffer = {
  id: number;
  translations: PageOfferTranslations[];
};


export type PageOfferTranslations = {
  id: number;
  page_offer_id?: number | PageOffer;
  languages_code?: string | Languages;
  offer_title?: string;
  offer_description?: string;
  offer_steps?: {
    caption: string;
    description: string;
    icon: string;
  }[];
  conclusion?: string;
  individual_development_title?: string;
  individual_development_bulletpoints?: {
    caption: string;
    description: string;
  }[];
  hosting_title?: string;
  hosting_message?: string;

};
