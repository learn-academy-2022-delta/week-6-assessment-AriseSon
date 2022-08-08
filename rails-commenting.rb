# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The purpose and functionality, to contain methods inside BlogPosts controller. Index is the restful route, that will call the index method to get the content in the database. 
class BlogPostsController < ApplicationController
  def index

    # ---2) The purpose and functionality, to make an active record call that will save the content from the database as a @posts instance variable. @post will contain the array of all instances.
    @posts = BlogPost.all
  end

    
    # ---3) The purpose and functionality, to have the function look for a specific Blogpost data item by accessing the id of item. This will call an Active Record to find one item by id. The id comes from the url params.  
    def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The purpose and functionality, to create and display a new form for the user. This will let users add content to the app, then get stored in the database.
  def new
    @post = BlogPost.new
  end
  
    # ---5) The purpose and functionality, to create a RESTful route that submits user information to the database, pass the params, check if the object is valid by using valid? method. If true, return no errors found in the object => Redirect with @post parameter passed. If false => return to internal route path. 
    def create
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

    # ---6) The purpose and functionality, to provide a view to submit specific data by accessing the id of the item we going to edit. Locate item by id, then update the item in the database by accessing the id of item we need to update.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The purpose and functionality, to verify if the object is valid by using valid? method. If true => redirect with @post param, If false => redirect to internal route path.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The purpose and functionality, to redirect the browser to passed param. @post contains the location in the hash key on @Blogpost database.
       The browser will redirect to the parameter passed. @post is storing the location that will be found in the hash key on the Blogpost database.
      redirect_to blog_post_path(@post)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The purpose and functionality, to make everything below the keyword private, meaning it can not be accessed outside the scope of its class by restricting the scope of where this method can be called.
  private
  def blog_post_params
    # ---10)The purpose and functionality, to create strong params method and restrictions so only certain params can only be called from outside. Pot only to the blog_table can only be called in this method. :blog_post is required in the create and update methods.
    params.require(:blog_post).permit(:title, :content)
  end
end

    params.require(:blog_post).permit(:title, :content)
  end
end






