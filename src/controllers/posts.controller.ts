import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { PostModel } from '../models/post.model';

const Post = mongoose.model('Post', PostModel);

class PostsController 
{
    public index (req: Request, res: Response) {
        Post.find({}, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    }

    public create (req: Request, res: Response) {
        let newPost = new Post(req.body);

        newPost.save((err, post) => {
            if (err) {
                res.send(err);
            }    
            res.json(post);
        });        
    }

    public show (req: Request, res: Response) {
        Post.findById(req.params.postId, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });        
    }

    public update (req: Request, res: Response) {           
        Post.findOneAndUpdate(
            { _id: req.params.postId }, req.body, { new: true }, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    }    

    public delete (req: Request, res: Response) {           
        Post.remove({ _id: req.params.postId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted post!'});
        });
    }    
}

export default new PostsController;
