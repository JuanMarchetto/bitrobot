export interface MainNavItem {
  id: string;
  icon: string;
  label: string;
}

export interface ResourceItem {
  id: string;
  icon: string;
  label: string;
  externalIcon: string;
}

export const mainNavItems: MainNavItem[] = [
  {
    id: "dashboard",
    icon: "/assets/img/file-03.svg",
    label: "DASHBOARD",
  },
  {
    id: "contribute",
    icon: "/assets/img/grid-dots-top.svg",
    label: "CONTRIBUTE",
  },
  {
    id: "profile",
    icon: "/assets/img/user-02.svg",
    label: "PROFILE",
  },
];

export const resourceItems: ResourceItem[] = [
  {
    id: "help",
    icon: "/assets/img/help-circle.svg",
    label: "HELP",
    externalIcon: "/assets/img/trend-up-02-2.svg",
  },
  {
    id: "docs",
    icon: "/assets/img/file-05.svg",
    label: "DOCS",
    externalIcon: "/assets/img/trend-up-02-2.svg",
  },
  {
    id: "shop",
    icon: "/assets/img/shopping-bag-02.svg",
    label: "SHOP",
    externalIcon: "/assets/img/trend-up-02-2.svg",
  },
  {
    id: "about",
    icon: "/assets/img/info-circle.svg",
    label: "ABOUT",
    externalIcon: "/assets/img/trend-up-02-3.svg",
  },
];

export interface CarouselSlide {
  icon: string;
  title: string;
  description: string;
  points: number;
  bgImage1: string;
  bgImage2: string;
}

export interface EarningsCard {
  label: string;
  value: string;
  unit: string;
  icon: string;
}

export interface ChartDataPoint {
  month: string;
  value: number;
}

export interface LeaderboardEntry {
  rank: number;
  user: string;
  avatar: string;
  lifetimeEarning: string;
  thisEpoch: string;
  referrals: string;
  isCurrentUser: boolean;
}

export const carouselSlides: CarouselSlide[] = [
  {
    icon: "/assets/img/li-discord.svg",
    title: "Discord",
    description: "Stay involved, don't miss an update. Join the community.",
    points: 20,
    bgImage1: "/assets/img/bg-image.png",
    bgImage2: "/assets/img/bg-image-1.png",
  },
  {
    icon: "/assets/img/file-05.svg",
    title: "Documentation",
    description: "Explore comprehensive guides and API documentation for developers.",
    points: 15,
    bgImage1: "/assets/img/bg-image.png",
    bgImage2: "/assets/img/bg-image-1.png",
  },
  {
    icon: "/assets/img/help-circle.svg",
    title: "Get Support",
    description: "Need help? Our support team is ready to assist you with any questions.",
    points: 10,
    bgImage1: "/assets/img/bg-image.png",
    bgImage2: "/assets/img/bg-image-1.png",
  },
  {
    icon: "/assets/img/grid-dots-top.svg",
    title: "Contribute",
    description: "Be part of the network. Contribute and earn rewards for your participation.",
    points: 25,
    bgImage1: "/assets/img/bg-image.png",
    bgImage2: "/assets/img/bg-image-1.png",
  },
];

export const earningsCards: EarningsCard[] = [
  {
    label: "LAST EPOCH",
    value: "234",
    unit: "points",
    icon: "/assets/img/points-2.svg",
  },
  {
    label: "LIFETIME",
    value: "1.3k",
    unit: "points",
    icon: "/assets/img/points-3.svg",
  },
];

export const chartData: ChartDataPoint[] = [
  { month: "OCT", value: 800 },
  { month: "NOV", value: 800 },
  { month: "DEC", value: 800 },
  { month: "JAN", value: 1000 },
  { month: "FEB", value: 800 },
  { month: "MAR", value: 800 },
  { month: "APR", value: 800 },
];

export const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 230,
    user: "0x9ec42...79da5",
    avatar: "/assets/img/frame-6@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "5",
    isCurrentUser: true,
  },
  {
    rank: 1,
    user: "0x479bd...2a1b3",
    avatar: "/assets/img/frame-6-1@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "56",
    isCurrentUser: false,
  },
  {
    rank: 2,
    user: "0x39a02...1e791",
    avatar: "/assets/img/frame-6-2@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "43",
    isCurrentUser: false,
  },
  {
    rank: 3,
    user: "0xb36a4...1d3a3",
    avatar: "/assets/img/frame-6-3@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "41",
    isCurrentUser: false,
  },
  {
    rank: 4,
    user: "0x321c7...c3d8d",
    avatar: "/assets/img/frame-6-4@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "32",
    isCurrentUser: false,
  },
  {
    rank: 5,
    user: "0x932d1...134015",
    avatar: "/assets/img/frame-6-5@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "30",
    isCurrentUser: false,
  },
  {
    rank: 6,
    user: "0x6542e...2a407",
    avatar: "/assets/img/frame-6-6@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "30",
    isCurrentUser: false,
  },
  {
    rank: 7,
    user: "0x345c9...7a06a",
    avatar: "/assets/img/frame-6-7@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "30",
    isCurrentUser: false,
  },
  {
    rank: 8,
    user: "0x9a49a...bece6",
    avatar: "/assets/img/frame-6-8@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "28",
    isCurrentUser: false,
  },
  {
    rank: 9,
    user: "0x03641...452b87",
    avatar: "/assets/img/frame-6-9@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "12",
    isCurrentUser: false,
  },
  {
    rank: 10,
    user: "0x4a6a0...516f2",
    avatar: "/assets/img/frame-6-10@2x.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "12",
    isCurrentUser: false,
  },
];

export const carouselIndicators = Array.from({ length: carouselSlides.length }, (_, i) => i);
