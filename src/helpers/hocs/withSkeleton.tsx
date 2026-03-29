import Skeleton from "../../ui/Skeleton/Skeleton";
import type { DirectionType, SkeletonType } from "../../types/skeleton";

interface Props {
    isLoading: boolean;
}

const withSkeleton = <P extends object>(
    Component: React.ComponentType<P>,
    type?: SkeletonType,
    count?: number,
    direction?: DirectionType,
) => {
    return function WithSkeleton(props: Props & P) {
        const { isLoading, ...restProps } = props;

        if (isLoading) {
            return (
                <div style={{ width: "100%", minHeight: "400px" }}>
                    <Skeleton type={type} count={count} direction={direction} />
                </div>
            );
        }

        return <Component {...(restProps as P)} />;
    };
};

export default withSkeleton;
