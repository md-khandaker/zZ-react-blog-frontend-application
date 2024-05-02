import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { getCurrentUserDetail } from '../auth';
import { loadAllCategories } from '../services/category-service';
import {
  createPost as doCreatePost,
  uploadPostImage,
} from '../services/post-service'; // Importing the functions

const AddPost = () => {
  const editor = useRef(null);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(undefined);
  const [post, setPost] = useState({
    title: '',
    content: '',
    categoryId: '',
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    setUser(getCurrentUserDetail());
    loadAllCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChanged = (data) => {
    setPost({ ...post, content: data });
  };

  const createPost = (event) => {
    event.preventDefault();

    if (post.title.trim() === '') {
      toast.error('Post title is required!');
      return;
    }

    if (post.content.trim() === '') {
      toast.error('Post content is required!');
      return;
    }

    if (post.categoryId === '') {
      toast.error('Please select a category!');
      return;
    }

    post['userId'] = user.id;
    doCreatePost(post)
      .then((data) => {
        uploadPostImage(image, data.postId)
          .then((data) => toast.success('Image Uploaded!'))
          .catch((error) => {
            toast.error('Error uploading image');
            console.log(error);
          });

        toast.success('Post Created!');
        setPost({ title: '', content: '', categoryId: '' });
      })
      .catch((error) => {
        toast.error('Post not created due to an error!');
        console.log(error);
      });
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Container className="my-5">
      <Card className="shadow border-0">
        <CardBody>
          <h3 className="mb-4">What's on your mind?</h3>
          <Form onSubmit={createPost}>
            <FormGroup className="mb-3">
              <Label for="title">Post Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title"
                className="form-control"
                name="title"
                value={post.title}
                onChange={fieldChanged}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="content">Post Content</Label>
              <JoditEditor
                ref={editor}
                value={post.content}
                onChange={(newContent) => contentFieldChanged(newContent)}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="image">Select Post Banner</Label>
              <Input
                id="image"
                type="file"
                className="form-control"
                onChange={handleFileChange}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="category">Post Category</Label>
              <Input
                type="select"
                id="category"
                className="form-control"
                name="categoryId"
                value={post.categoryId}
                onChange={fieldChanged}
              >
                <option value="">-- Select category --</option>
                {categories.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                ))}
              </Input>
            </FormGroup>

            <div className="text-center">
              <Button type="submit" color="primary" className="me-2">
                Create Post
              </Button>
              <Button type="reset" color="danger">
                Reset Content
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AddPost;
