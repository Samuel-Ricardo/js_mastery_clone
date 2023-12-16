import { Filters } from "@/components/Filters";
import { SearchForm } from "@/components/SearchForm";
import { getResources, getResourcesPlaylist } from '../../../../sanity/actions';
import { ResourceCard } from "@/components/ResourceCard";

export const revalidate = 900;

interface Props {
    searchParams: { [key: string]: string | undefined }
}

const Home = async ({searchParams}: Props) => {
    const resources = await getResources({
        query: searchParams?.query || "",
        category: searchParams?.category || "",
        page: '1'
    })

    const resourcesPlaylist = getResourcesPlaylist()

    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">

            <section className="nav-padding w-full">
                <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
                    <h1 className="sm:heading1 heading2 mb-6 text-center text-white">Javascript Mastery Resources</h1>
                </div>
                <SearchForm/>
            </section>
            <Filters/>

            {(searchParams?.query || searchParams?.category) && (
                
                <section className="flex-center mt-6 w-full flex-wrap justify-center gap-16 sm:justify-start">
                    {resources?.length! > 0 ? (
                        resources?.map(resource =>
                            <ResourceCard
                                key={resource._id}
                                title={resource.title}
                                id={resource._id}
                                image={resource.image}
                                downloadNumber={resource.views}
                                downloadLink={resource.downloadLink} 
                            />
                        )
                    ) : (
                        <p className="bodsy-regular text-white-400"> 
                            No resources found
                        </p>
                    )}
                </section>

            )}      
            
        </main>
    );
};

export default Home;