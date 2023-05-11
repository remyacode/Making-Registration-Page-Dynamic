# Expense-Tracker-Project-1

here are the steps to push files from a folder on your computer to a GitHub repository using the VSCode terminal:

Open your project folder in VSCode.
Open a new terminal window by going to Terminal > New Terminal.
Navigate to the folder containing the files you want to push using the cd command. For example, if your files are in a folder called "my-project", you can navigate to it by typing cd my-project.
Initialize a new Git repository by typing git init in the terminal. This will create a new .git folder in your project folder.
Add your files to the staging area by typing git add . in the terminal. This will stage all the files in the folder for the next commit.
Commit your changes by typing git commit -m "Initial commit" in the terminal. Replace "Initial commit" with a brief description of your changes.
Go to GitHub and create a new repository with the same name as your project folder ("my-project" in this example).
Copy the HTTPS URL of your new repository.
Set the remote URL for your Git repository by typing git remote add origin <URL> in the terminal, replacing <URL> with the HTTPS URL you just copied. For example, if your URL is https://github.com/username/my-project.git, you would type git remote add origin https://github.com/username/my-project.git.
Push your changes to the GitHub repository by typing git push -u origin main in the terminal. This will push the changes to the main branch of your repository on GitHub.
That's it! Your files should now be uploaded to your GitHub repository.

//////////////////////////

To push the same files to another repository in your GitHub account, you can follow these steps:

Navigate to the folder containing the files you want to push to the new repository.

Initialize a new Git repository using the following command:

csharp
Copy code
git init
Add all the files to the staging area using the following command:

csharp
Copy code
git add .
Commit the changes using the following command:

sql
Copy code
git commit -m "Initial commit"
Add the URL of the new repository as a new remote using the following command:

csharp
Copy code
git remote add newremote <new repository URL>
Note: You can replace "newremote" with any name you like.

Verify that the new remote has been added using the following command:

Copy code
git remote -v
Push the files to the new repository using the following command:

perl
Copy code
git push -u newremote master
Note: You can replace "master" with the branch name you want to push the files to.

After executing these commands, your files should be pushed to the new repository on your GitHub account
