import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor Called"); //3
    super(props);

    this.state = {
      userInfo: { 
        name: "Default Name", 
        location: "Default Location", 
        login: "default login",
        avatar_url: "",
        bio: "",
        public_repos: 0,
        followers: 0,
        following: 0
      },
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    console.log("Child Component Mounted"); //5

    try {
      const data = await fetch("https://api.github.com/users/sickCoder6184");
      if (!data.ok) {
        throw new Error('Failed to fetch user data');
      }
      const json = await data.json();
      console.log(json);

      this.setState({
        userInfo: json,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      this.setState({
        loading: false,
        error: error.message
      });
    }
  }

  render() {
    console.log("Child render called"); //4

    const { userInfo, loading, error } = this.state;
    const { name, location, login, avatar_url, bio, public_repos, followers, following } = userInfo;

    if (loading) {
      return (
        <div className="flex justify-center items-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">😕</div>
          <p className="text-red-600 font-semibold mb-2">Unable to load developer info</p>
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 text-center animate-fade-in">
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg">
            {avatar_url ? (
              <img 
                src={avatar_url} 
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-4xl text-gray-500">
              👨‍💻
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name || "Developer"}</h3>
          <p className="text-primary font-medium mb-1">@{login}</p>
          <p className="text-gray-600 flex items-center justify-center">
            <span className="mr-1">📍</span>
            {location || "Lucknow, India"}
          </p>
        </div>

        {bio && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 italic">"{bio}"</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{public_repos || 0}</div>
            <div className="text-sm text-blue-500">Repositories</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{followers || 0}</div>
            <div className="text-sm text-green-500">Followers</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{following || 0}</div>
            <div className="text-sm text-purple-500">Following</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">React Developer</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Frontend</span>
          <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">JavaScript</span>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <a 
            href={`https://github.com/${login}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span className="mr-2">🚀</span>
            View GitHub Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;