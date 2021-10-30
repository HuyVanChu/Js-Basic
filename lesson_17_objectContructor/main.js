// https://fullstack.edu.vn/learning/javascript-co-ban?id=2131
var User=function (firstName_, lastName_, avatar_) {
    this.firstName = firstName_;
    this.lastName = lastName_;
    this.avatar = avatar_;

    this.getName=function () {
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('Chu', 'Van', 'avatar');
var user = new User('Chu', 'Tuan', 'avatar');

author.title = 'Chia se kien thuc';
user.comments = 'Chia se rat hay';

console.log(author.getName());
console.log(user);