export type IdVerificationStatus = 'pending' | 'approved' | 'rejected' | 'not_submitted';
export type DocumentType = 'passport' | 'license' | 'national_id';

export interface IdVerification {
  status: IdVerificationStatus;
  documentType: DocumentType;
  documentUrl: string;
  submittedAt: Date | string;
  reviewedAt: Date | string;
  rejectionReason: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  refreshToken?: string;
  role: 'admin' | 'user';
  firstName: string;
  lastName: string;
  age?: number;
  dateOfBirth?: Date | string;
  phone?: string;
  city?: string;
  country?: string;
  isVerified: boolean;
  isIdVerified: boolean;
  interests: string[];
  bio?: string;
  profilePicture?: string;
  idVerification?: IdVerification;
  createdAt: Date | string;
  updatedAt: Date | string;
}
