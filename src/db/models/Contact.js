import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: ['personal'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    createdAt: Date.now,
    updatedAt: Date.now,
  },
);

export const ContactCollection = model('contact', contactSchema);
