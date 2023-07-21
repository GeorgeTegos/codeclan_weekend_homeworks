from flask import render_template,Blueprint,request,redirect
from models.book_list import book_list, Book

book_blueprint = Blueprint("book_list",__name__) 

@book_blueprint.route('/')
def index():
    return render_template('index.jinja',title = "Library")

@book_blueprint.route('/books')
def list_of_books():
    return render_template("books.jinja",title="Test",book_list = book_list)

@book_blueprint.route("/books/<index>")
def show_specific_book(index):
    return render_template("books.jinja",title=book_list[int(index)].title,book=book_list[int(index)])

# @book_blueprint.route("/books/<title>")
# def show_specific_book(title):
#     for title_name in book_list:
        
#     return render_template("books.jinja",title=title,book = book_list)


@book_blueprint.route('/new_book')
def add_new_book():
    return render_template('new_book.jinja',title="Add New Book")

@book_blueprint.route('/new_book', methods=["POST"])
def confirm_added():
    title = request.form['title']
    author = request.form['author']
    book_genre = request.form['book_genre']
    new_book = Book(title,author,book_genre)
    book_list.append(new_book)
    return redirect('/')

@book_blueprint.route("/books/<index>/delete")
def delete_book(index):
    book_list.remove(book_list[int(index)])
    return redirect('/books')
