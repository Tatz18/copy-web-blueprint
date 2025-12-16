import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Teams = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const teams = [
    {
      name: "Avijit Guha",
      text: 'Sales Manager',
      empid: 'PR24S-001',
      avatar: "teams/profile.png"
    },
    {
      name: "Aniket Prasad",
      text: 'Sales Executive',
      empid: 'PR25S-002',
      avatar: "teams/profile.png"
    },
    {
      name: "Saini Dutta",
      text: 'Administrative Manager',
      empid: 'PR25A-003',
      avatar: "teams/profile.png"
    },
    {
      name: "Saina Goon",
      text: 'Back Office Executive',
      empid: '',
      avatar: "teams/profile.png"
    },
    {
      name: "Mallika Sarker",
      text: 'Telecaller Executive',
      empid: '',
      avatar: "teams/profile.png"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-pink-50/40 via-purple-50/20 to-blue-50/30 dark:from-pink-900/10 dark:via-purple-900/5 dark:to-blue-900/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/15 dark:bg-blue-600/8 rounded-full blur-3xl"></div>
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Teams           </h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => {
            const bgColors = [
              "bg-gradient-to-br from-pink-100 to-pink-200/50 dark:from-pink-900/20 dark:to-pink-800/10",
              "bg-gradient-to-br from-blue-100 to-blue-200/50 dark:from-blue-900/20 dark:to-blue-800/10", 
              "bg-gradient-to-br from-purple-100 to-purple-200/50 dark:from-purple-900/20 dark:to-purple-800/10",
              "bg-gradient-to-br from-green-100 to-green-200/50 dark:from-green-900/20 dark:to-green-800/10",
              "bg-gradient-to-br from-orange-100 to-orange-200/50 dark:from-orange-900/20 dark:to-orange-800/10",
              "bg-gradient-to-br from-indigo-100 to-indigo-200/50 dark:from-indigo-900/20 dark:to-indigo-800/10"
            ];
            
            return (
            <div 
              key={index}
              className={`${bgColors[index]} backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth relative border border-white/20 dark:border-gray-700/30 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >              
              <div className="space-y-4">                
                <div className="pt-4 border-border">
                  <div className="flex items-center space-x-3">
                    <img
                      src={team.avatar}
                      alt={team.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{team.name}</h4>
                      <p>{team.text}</p>
                      <p className="text-sm text-muted-foreground">EMP ID: {team.empid}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Teams;
