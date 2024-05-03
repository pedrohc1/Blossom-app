import Category from "./category-model";
import { ICategory } from "../types";
import { Request, Response } from "express";

export const getAllCategories = async (
  request: Request,
  response: Response
) => {
  try {
    const categories = await Category.find({});
    return response.send(categories);
  } catch (error) {
    console.log("error in getAllCategories", error);
    throw error;
  }
};

export const createCategory = async (request: Request, response: Response) => {
  try {
    const { color, icon, isEditable, name }: ICategory = request.body;

    const category = await Category.create({
      color,
      icon,
      isEditable,
      name,
    });
  } catch (error) {
    console.log("error in createCategory", error);
  }
};
