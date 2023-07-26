interface IEmptyStateProps {
	title: string;
	subtitle?: string;
	callToAction?: () => unknown;
}

const EmptyState = ({ title, subtitle, callToAction }: IEmptyStateProps) => {
	return <div>Empty State.</div>;
};

export default EmptyState;
