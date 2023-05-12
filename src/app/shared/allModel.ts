export class loginMaster {
  phone!: number;
  password!: string;
}

// HOME MASTER
export class bannerMaster {
  bannerId!: number;
  bannerName!: string;
  bannerDescription!: string;
  bannerType!: string;
  bannerPath!: string;
  status!: string;
  startDate!: Date;
  endDate!: Date;
}

// ABOUT US MASTER
export class aboutMaster {
  aboutUsId!: number;
  aboutUsDescription!: string;
  visionDescription!: string;
  missionDescription!: string;
  status!: string;
  aboutUsHeading!: string;
  image!: string;
}

// GALLERY MASTER
export class galleryMaster {
  galleryId!: number;
  name!: string;
  status!: string;
  type!: string;
  price!: string;
  description!: string;
  image!: string;
}

// SEASON WISE MASTER
export class seasonwiseMaster {
  seasonId!: number;
  seasonName!: string;
  status!: string;
}

// PRODUCT MASTER
export class productMaster {
  productId!: number;
  name!: string;
  description!: string;
  status!: string;
  productImage!: string;
  seasonId!: number;
  whatsappNo!: number;
  type!: string;
  mrp!: string;
}

// CONTACT MASTER
export class conatctMaster {
  contactUsId!: number;
  mobileNo!: number;
  contactEmail!: string;
  contactAddress!: string;
  status!: string;
}
