import { getUserAuthData, UserRole } from "entities/User";
import { getUserRoles } from "entities/User/model/selectors/getUserRole/getUserRole";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getRouteForbidden, getRouteMain } from "shared/const/router";

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    let auth = useSelector(getUserAuthData);
    let location = useLocation();
    const userRoles = useSelector(getUserRoles);
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth || !hasRequiredRoles) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
