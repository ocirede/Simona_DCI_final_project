import express from "express";
import { createPost, deletePost, updatePost, getPosts, applyOffer ,getOfferById} from "../controllers/postController.js"; 
import { postImageUpload } from "../middleware/multerCloudinary.js";

const postRoutes = express.Router();

postRoutes.post('/create',  postImageUpload.single('postImage'), createPost);
postRoutes.get('/', getPosts);
postRoutes.put('/:id', updatePost);
postRoutes.delete('/:id', deletePost);
postRoutes.post('/apply', applyOffer);
postRoutes.get('/find/:offerId',getOfferById)

export default postRoutes;
