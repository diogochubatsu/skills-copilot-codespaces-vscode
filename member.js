function skillMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'CSS', 'HTML']
    };

    member.sayHi = function () {
        console.log('Hi, I am ' + this.name);
    };

    return member;
}