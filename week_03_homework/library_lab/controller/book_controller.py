from flask import render_template,Blueprint,request,redirect
from models.book_list import book_list, Book
import random

book_blueprint = Blueprint("book_list",__name__) 

@book_blueprint.route('/')
def index():
    return render_template('index.jinja',title = "Library")


# Books
@book_blueprint.route('/books')
def list_of_books():
    return render_template("books.jinja",title="Books List",book_list = book_list)

@book_blueprint.route("/books/<id>")
def show_specific_book(id):
        book_position = find_book_by_id(id)
        return render_template("books.jinja",title=book_position.title,book=book_position,
                           book_checked_out=book_position.checked_out)

@book_blueprint.route("/books/<id>/delete")
def delete_book(id):
    book = find_book_by_id(id)
    book_list.remove(book)
    return redirect('/books')

@book_blueprint.route('/books/<id>/check_out', methods=['POST'])
def check_out_book(id):
    find_book_by_id(id).checked_out = True
    return redirect('/')

@book_blueprint.route('/books/<id>/check_in', methods=['POST'])
def check_in_book(id):
    find_book_by_id(id).checked_out= False
    return redirect('/')


# New Books
@book_blueprint.route('/new_book')
def add_new_book():
    return render_template('new_book.jinja',title="Add New Book")

@book_blueprint.route('/new_book', methods=["POST"])
def confirm_added():
    title = request.form['title']
    author = request.form['author']
    book_genre = request.form['book_genre']
    try:
        request.form["check_out"]
        book_checked_out=False
    except KeyError:
        book_checked_out=True
    book_id = check_unique_id(book_list)
    new_book = Book(title,author,book_genre,book_id,book_checked_out)
    book_list.append(new_book)
    return redirect('/')

def check_unique_id(list_of_books):
     unique = False
     while unique != True:
        list_of_id = []
        new_id = random.randint(1,100)
        for book in list_of_books:
            list_of_id.append(book.id)
        if new_id not in list_of_id:
            unique = True
            return new_id
        else:
            unique = False

def find_book_by_id(id):
    for book in book_list:
        if book.id == int(id):
            result = book
    return result
