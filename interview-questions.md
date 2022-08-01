# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

The mistake can be fixed by using migrations. Migrations allow change the database. The name of the foreign key is cohort_id. The foreign key will be on the Student model.

Researched answer:

Creating the new column
-add a timestamped ruby migrations file: $ rails g migration add_cohort_id_to_students
-edit the .rb file by adding def change add_column: :cohorts, :cohort_id, :integer end 3 perform migration $rails db:migrate

Creating the relationship
-edit the the class.rb files under app/models in cohort.rb -> has_many :students in student.rb -> belongs_to :cohort

Creating records with a foreign key in rails c
-locate cohort: delta = Cohort.first
-make student related to cohort: delta.students.create key:values

Reassigning existing records
-student.cohort_id = 1


2. Which RESTful routes must always be passed params? Why?

Your answer:

The RESTful routes that must be passed params are Read, Update and Delete. These Restful routes need params because the require data these routes use require access to the database.

Researched answer:

The RESTFUL routes that must always be passed params are Read, Update and Delete.
Read needs a identifier to know which item in the database need to be displayed to the reader.
Update need to know which item in the database is being called for the edit.
Delete need to know which item in the database is being called in order for the data to be destroyed.


3. Name three rails generator commands. What is created by each?

Your answer:

Three rails generator commands are rails g migration, rails g rpec:install and rails g controller name. Rails g migration create a file to allow modification to the database. Rails g rpec:install create test data within rails. Rails g controller name create a file for controller data.

Researched answer:

Rails g app_name -d postgresql -T -G >> creates an app named app_name, -d
postgresql: replaces database with postgres, -T: gets rid of the default testing environment, -G: prevents git initiation since rails has its own build in version tracking system.

Rails g migration <name_of_change> >> creates a file in the migrations folder.
The name of the migration should either be Pascal or snake cased. It should start with the specific action and end with the name of the table.

Rails g repec:install >>creates the dependencies for RSpec testing environments.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
The controller method name that would be called by each route is students#index. The action would display a list of all students in the table.

action: "POST" location: /students 
The controller method name that would be called by each route is students#create. The action would create a new student in the table.

action: "GET" location: /students/new 
The controller method name that would be called by each route is students#new. The action would return an HTML form for creating a new student in the table.

action: "GET" location: /students/2
The controller method name that would be called by each route is students#show. The action would display the specific student with ID=2 from the table.

action: "GET" location: /students/2/edit 
The controller method name that would be called by each route is students#edit. The action would return an HTML form for editing a student with ID=2.

action: "PATCH" location: /students/2 
The controller method name that would be called by each route is students#update. The action would update the specific student with ID=2.

action: "DELETE" location: /students/2 
The controller method name that would be called by each route is students#destroy. The action would delete the specific student with ID=2 from the table.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a developer, I have been assigned to create an application where a user can create and manage to do list items. 
2) As a developer, I will create a full-stack Rails application for managing a to-do list. 
3) As a developer, my to-do list will have a title and description. 
4) As a developer, I can add new task directly into my database. 
5) As a user, I can see all the to-do list titles listed on the home page of the application. 
6) As a user, I can click on the title of the to-do list and be routed to a page where I can see the full description of the to-do item. 
7) As a user, I can navigate from the to-do description page back to the home page. 
8) As a user, I can see a form where I can create a new to-do item. 
9) As a user, I can click a button that will submit my to-do item to the database. 
10) As a user, when I submit my to-do item, I am redirected to the home page.